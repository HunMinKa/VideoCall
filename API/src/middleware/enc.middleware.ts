import { HttpStatus, Injectable, NestMiddleware, Req, Session } from '@nestjs/common';
import { Request, Response } from 'express';
import rawbody from 'raw-body';
import { ConfigService } from '@nestjs/config';

import * as crypto from 'crypto-browserify';
import { Base64 } from 'js-base64';
import * as pkcs7 from 'pkcs7';
import { InjectRepository } from '@nestjs/typeorm';
import { Patient } from 'src/models/entities/Patient';
import { Repository } from 'typeorm';

@Injectable()
export class DecrtptyMiddleware implements NestMiddleware {
	constructor(private configService: ConfigService) {}
	async use(req: Request, res: Response, next: Function) {
		const raw = await rawbody(req);
		const text = raw.toString().trim();

		const buf = Buffer.from(text, 'base64');
		const decryptKey = crypto.privateDecrypt(
			{
				key: this.configService.get('PRIVATE_KEY'),
				padding: crypto.constants.RSA_PKCS1_PADDING,
			},
			buf,
		);

		req['originBody'] = text;
		req.body = JSON.parse(decryptKey.toString('utf8'));

		next();
	}
}

@Injectable()
export class DecrtpytAESMiddleware implements NestMiddleware {
	constructor(
		private configService: ConfigService,
		@InjectRepository(Patient) private readonly PatientRepository: Repository<Patient>,
	) {}
	async use(@Req() req: Request, res: Response, next: Function) {
		// const reqinsungSeq =
		// 	req.headers.insungseq == undefined ? req.headers.insungseq.toString() : req.headers.insungseq.toString();

		// const buf = Buffer.from(reqinsungSeq, 'base64');
		// const insungSeq = crypto
		// 	.privateDecrypt(
		// 		{
		// 			key: this.configService.get('PRIVATE_KEY'),
		// 			padding: crypto.constants.RSA_PKCS1_PADDING,
		// 		},
		// 		buf,
		// 	)
		// 	.toString('utf8');
		const insungSeq = req.headers.insungseq;

		console.log(req.headers);
		if (req.headers['content-type'].indexOf('multipart/form-data') == -1) {
			const raw = await rawbody(req);
			const text = raw.toString().trim();
			console.log(text);
			this.PatientRepository.findOne({
				where: [{ insungSeq: insungSeq }],
			}).then((patient) => {
				const decrypted = this.decryptAES(patient.symKey, text);
				req['originBody'] = text;
				req.body = decrypted;

				next();
			});
		} else {
			this.PatientRepository.findOne({
				where: [{ insungSeq: insungSeq }],
			}).then((patient) => {
				req['symKey'] = patient.symKey;

				next();
			});
		}
	}

	decryptAES(symKey: any, text: any): string {
		const key = Base64.atob(symKey);
		const array = Uint8Array.from(key, (b) => b.charCodeAt(0));
		const iv = crypto.createHash('md5').update(array).digest();

		const decipher = crypto.createDecipheriv('aes-256-cbc', array, iv);

		decipher.setAutoPadding(false);
		let decrypted = decipher.update(text, 'base64', 'utf8');
		decrypted += decipher.final('utf8');

		return this.pkcs7Unpad(decrypted);
	}

	pkcs7Unpad(params: any): string {
		const buffer = Buffer.from(params, 'utf8');
		const bytes = new Uint8Array(buffer.length);
		let i = buffer.length;

		while (i--) {
			bytes[i] = buffer[i];
		}
		const result = Buffer.from(pkcs7.unpad(bytes));

		return result.toString('utf-8') == '' ? '' : JSON.parse(result.toString('utf-8'));
	}
}
