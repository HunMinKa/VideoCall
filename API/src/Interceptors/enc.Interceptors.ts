/* tslint:disable */
import { Injectable, NestInterceptor, ExecutionContext, CallHandler, HttpStatus } from '@nestjs/common';
import { from, Observable, of } from 'rxjs';
import { buffer, map, switchMap, tap } from 'rxjs/operators';
import { Request, Response } from 'express-serve-static-core';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import * as crypto from 'crypto-browserify';
import { Base64 } from 'js-base64';
import moment from 'moment';

import { PatientI } from '../models/interface/Patient.interface';
import { Patient } from '../models/entities/Patient';
import { ApiLogHistory } from '../models/entities/ApiLogHistory';

@Injectable()
export class Encryptnterceptor implements NestInterceptor {
	constructor(
		private configService: ConfigService,
		@InjectRepository(Patient) private readonly PatientRepository: Repository<Patient>,
		@InjectRepository(ApiLogHistory) private readonly logRepository: Repository<ApiLogHistory>,
	) {}
	intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
		const ctx = context.switchToHttp();
		const req: Request = ctx.getRequest();
		const res: Response = ctx.getResponse();

		const requestHeader = {
			method3: req.method,
			path3: req.path,
			header3: req.headers,
		};
		const logdata = {
			requestHeader: JSON.stringify(requestHeader),
			requestBody: '',
			responseBody: '',
			requestDate: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
			responseHeader: '',
			requestKey: '',
			responseKey: '',
		};

		if (req.path == '/login/keypair') {
			return next.handle().pipe(
				map(() => {
					Promise.all([res.status(HttpStatus.OK)]).then(() => {
						logdata.requestBody = req.body;
						logdata.responseHeader = JSON.stringify(res.getHeaders());
						this.logSave(logdata);
					});
				}),
			);
		} else {
			let insungSeq;
			return next.handle().pipe(
				map((d: any) => {
					if (req.headers.insungseq != undefined) {
						insungSeq = req.headers.insungseq.toString();
						// const buf = Buffer.from(req.headers.insungseq.toString(), 'base64');
						// insungSeq = crypto
						// 	.privateDecrypt(
						// 		{
						// 			key: this.configService.get('PRIVATE_KEY'),
						// 			padding: crypto.constants.RSA_PKCS1_PADDING,
						// 		},
						// 		buf,
						// 	)
						// 	.toString('utf8');
					} else {
						//const reqinsungSeq = req.headers.insungseq == undefined ? d.data.insungSeq : d.data.insungSeq;
						insungSeq = d.data.insungSeq;
					}

					this.PatientRepository.findOne({
						where: [{ insungSeq: insungSeq }],
					}).then((patient: PatientI) => {
						res.contentType('text/plain');
						res.status(HttpStatus.OK).send(this.encryptAES(patient.symKey, d));

						if (!(req.path == '/measure/photo' || req.path == '/measure/image')) {
							logdata.requestBody = req['originBody'];
							logdata.responseBody = this.encryptAES(patient.symKey, d).toString();
						}

						logdata.requestKey = patient.symKey;
						logdata.responseKey = patient.symKey;
						logdata.responseHeader = JSON.stringify(res.getHeaders());

						this.logSave(logdata);
					});
				}),
			);
		}
	}

	encryptAES(symKey: any, text: any): string {
		const data = Base64.atob(symKey);
		const array = Uint8Array.from(data, (b) => b.charCodeAt(0));

		const iv = crypto.createHash('md5').update(array).digest();

		const cipher = crypto.createCipheriv('aes-256-cbc', array, iv);

		const chkJson = typeof text === 'object' ? JSON.stringify(text) : text;

		const encrypted = cipher.update(chkJson);

		return Buffer.concat([encrypted, cipher.final()]).toString('base64');
	}

	logSave(d: any): void {
		const newLog = new ApiLogHistory();

		newLog.requestKey = d.requestKey;
		newLog.requestHeader = d.requestHeader;
		newLog.requestBody = d.requestBody;
		newLog.requestDate = d.requestDate;
		newLog.responseKey = d.responseKey;
		newLog.responseHeader = d.responseHeader;
		newLog.responseBody = d.responseBody;
		newLog.responseDate = new Date();
		newLog.inputUtcDt = d.requestDate;

		this.logRepository.save(newLog);
	}
}
