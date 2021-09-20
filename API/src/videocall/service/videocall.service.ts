import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Observable, from } from 'rxjs';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import OpenTok = require('opentok');
import { VideoConsultationHistory } from '../../models/entities/VideoConsultationHistory';
import { VideoConsultationArchives } from '../../models/entities/VideoConsultationArchives';
import { VideoConsultationMaster } from '../../models/entities/VideoConsultationMaster';
import * as admin from 'firebase-admin';
import serviceAccount from '../../hicare-c18c9-firebase-adminsdk-wmvwh-3a9d6cbe99.json';
import { Patient } from 'src/models/entities/Patient';
import { PatientI } from 'src/models/interface/Patient.interface';
import moment from 'moment';
@Injectable()
export class VideocallService {
	constructor(
		private configService: ConfigService,
		@InjectRepository(Patient) private readonly patientRepository: Repository<PatientI>,
		@InjectRepository(VideoConsultationMaster)
		private readonly videoConsultationMasterRepository: Repository<VideoConsultationMaster>,
		@InjectRepository(VideoConsultationHistory)
		private readonly videoConsultationHistoryRepository: Repository<VideoConsultationHistory>,
		@InjectRepository(VideoConsultationArchives)
		private readonly videoConsultationArchivesRepository: Repository<VideoConsultationArchives>,
	) {}
	nowDate = new Date();

	getVideoCallInfo(callSeq: any): Observable<any> {
		const query = this.videoConsultationHistoryRepository
			.createQueryBuilder('video_consultation_history')
			.select(['video_consultation_history.session_id as sessionId'])
			.where('video_consultation_history.call_seq = :call_seq', { call_seq: callSeq })
			.getRawOne();

		const opentokKey = this.configService.get('OPENTOK_KEY');
		const opentokSecret = this.configService.get('OPENTOK_SECRET');
		const client = new OpenTok(opentokKey, opentokSecret);

		return from(
			Promise.all([query]).then((d) => {
				const data = {
					statusCode: 200,
					data: {
						apiKey: opentokKey,
						sessionId: d[0]['sessionId'],
						token: client.generateToken(d[0]['sessionId']),
					},
					message: 'success',
				};

				return data;
			}),
		);
	}
	// directVideoCall(body: any): Observable<any> {
	// 	const skip = (body.page_no - 1) * body.page_size;
	// 	const take = body.page_size;
	// 	const startDate = body.startDate != undefined ? body.startDate : null;
	// 	const endDate = body.endDate != undefined ? body.endDate : null;
	// 	const insungSeq = body.insungSeq;
	// 	const measureType = body.measureType;
	// 	const deviceCode = body.deviceCode;

	// 	const query = this.measureTotalRepository
	// 		.createQueryBuilder('measures_total')
	// 		.select([
	// 			'measures_total.measure_seq as measureSeq',
	// 			'measures_total.measure_type as measureType',
	// 			'measures_total.device_code as deviceCode',
	// 			'measures_total.measure_utc_dt as measureUtcDt',
	// 			'measures_total.input_utc_dt as inputUtcDt',
	// 		])
	// 		.addSelect('ROW_NUMBER () OVER (ORDER BY measures_total.measure_utc_dt desc) as row_num')
	// 		.where('measures_total.insung_seq = :insung_seq', { insung_seq: insungSeq })
	// 		.andWhere('measures_total.measure_type IN (:measure_type)', { measure_type: measureType })
	// 		.andWhere('measures_total.device_code IN (:device_code)', { device_code: deviceCode });
	// 	if (startDate != null && endDate != null) {
	// 		query
	// 			.andWhere('measures_total.measure_utc_dt >= :measure_utc_dt', { measure_utc_dt: startDate })
	// 			.andWhere('measures_total.measure_utc_dt <= :measure_utc_dt', { measure_utc_dt: endDate });
	// 	}
	// 	return from(
	// 		Promise.all([query.offset(skip).limit(take).getRawMany(), query.getCount()]).then((d) => {
	// 			for (let i = 0; i < d[0].length; i++) {
	// 				d[0][i]['measureRow'] = this.SetMeasureValue(d[0][i]);
	// 			}
	// 			const data = {
	// 				statusCode: 200,
	// 				totalCount: d[1],
	// 				data: d[0],
	// 			};
	// 			return data;
	// 		}),
	// 	);
	// }
	// pushVideoCallToDoctor(body: any): Observable<any> {
	// 	const insungSeq = body.insungSeq;
	// 	const sessionTimeout = body.sessionTimeout;
	// 	const turnoffTimeout = body.turnoffTimeout;
	// 	const swVersion = body.swVersion;
	// 	const hwVersion = body.hwVersion;
	// 	const newVideoConsultationHistory = new VideoConsultationHistory();
	// 	newVideoConsultationHistory.insungSeq = insungSeq;
	// 	newVideoConsultationHistory.sessionTimeout = sessionTimeout;
	// 	newVideoConsultationHistory.turnoffTimeout = turnoffTimeout;
	// 	newVideoConsultationHistory.swVersion = swVersion;
	// 	newVideoConsultationHistory.hwVersion = hwVersion;

	// 	const query = this.videoConsultationHistoryRepository.save(newVideoConsultationHistory);

	// 	return from(
	// 		Promise.all([query]).then((d) => {
	// 			const data = {
	// 				statusCode: 200,
	// 				data: d[0],
	// 			};
	// 			return data;
	// 		}),
	// 	);
	// }
	respondToVideoCall(body: any): Observable<any> {
		const callType = body.callType;
		const flag = body.flag;
		const pushSeq = body.pushSeq;
		const callSeq = body.callSeq;

		const newVideoConsultationHistory = new VideoConsultationHistory();
		newVideoConsultationHistory.seq = callType == 'direct' ? callSeq : pushSeq;
		newVideoConsultationHistory.flag = flag;
		newVideoConsultationHistory.callType = callType;

		const query = this.videoConsultationHistoryRepository.update(callSeq, newVideoConsultationHistory);

		return from(
			Promise.all([query]).then((d) => {
				const data = {
					statusCode: 200,
					data: d[0],
				};
				return data;
			}),
		);
	}
	videocallRecordingFileSave(body: any): Observable<any> {
		const id = body.id;
		const createdAt = body.createdAt;
		const duration = body.duration;
		const resolution = body.resolution;
		const sessionId = body.sessionId;
		const constsize = body.constsize;
		const url = body.url;
		const name = body.name;

		const newVideoConsultationArchives = new VideoConsultationArchives();
		newVideoConsultationArchives.id = id;
		newVideoConsultationArchives.createAt = createdAt;
		newVideoConsultationArchives.duration = duration;
		newVideoConsultationArchives.resolution = resolution;
		newVideoConsultationArchives.sessionId = sessionId;
		newVideoConsultationArchives.size = constsize;
		if (constsize > 0) {
			const query = this.videoConsultationArchivesRepository.save(newVideoConsultationArchives);

			return from(
				Promise.all([query]).then((d) => {
					const data = {
						statusCode: 200,
						data: d[0],
					};
					return data;
				}),
			);
		}
	}

	openCall(insungSeq: any): Observable<any> {
		const insung_seq = insungSeq;
		const opentokKey = this.configService.get('OPENTOK_KEY');
		const opentokSecret = this.configService.get('OPENTOK_SECRET');

		const client = new OpenTok(opentokKey, opentokSecret);
		const sessionOptions: OpenTok.SessionOptions = {
			mediaMode: 'routed',
			archiveMode: 'manual',
		};
		const newVideoConsultationMaster = new VideoConsultationMaster();
		const newVideoConsultationHistory = new VideoConsultationHistory();

		const newSession = function () {
			// *** Return a promise
			return new Promise(function (resolve, reject) {
				client.createSession(sessionOptions, (err: Error | null, session: OpenTok.Session | undefined) => {
					// *** Reject on error
					if (err) {
						reject(err);
					} else {
						const token = client.generateToken(session?.sessionId || '');
						const data = {
							apiKey: opentokKey,
							sessionId: session?.sessionId,
							token: token,
						};

						resolve(data);
					}
				});
			});
		};

		const val = newSession();
		const query = this.patientRepository
			.createQueryBuilder('patient')
			.select(['patient.token as token'])
			.where('patient.insung_seq = :insung_seq', { insung_seq })
			.getRawOne();

		const query2 = this.videoConsultationMasterRepository.save({});
		const query3 = this.videoConsultationHistoryRepository.save({});

		return from(
			Promise.all([val, query, query2, query3]).then((d) => {
				newVideoConsultationMaster.doctorSeq = 28;
				newVideoConsultationMaster.callType = 'appoint';
				newVideoConsultationMaster.appointSeq = 999;
				newVideoConsultationMaster.inputUtcDt = new Date();
				newVideoConsultationMaster.sessionId = d[0]['sessionId'];
				this.videoConsultationMasterRepository.update(d[2]['callSeq'], newVideoConsultationMaster);

				newVideoConsultationHistory.insungSeq = insung_seq;
				newVideoConsultationHistory.callerTelnum = 'develop@insunginfo.co.kr';
				newVideoConsultationHistory.startUtcDt = new Date();
				newVideoConsultationHistory.calleeTelnum = '2650';
				newVideoConsultationHistory.doctorSeq = 28;
				newVideoConsultationHistory.appointSeq = 999;
				newVideoConsultationHistory.callSeq = d[2]['callSeq'];
				newVideoConsultationHistory.sessionId = d[0]['sessionId'];
				newVideoConsultationHistory.callType = 'appoint';
				this.videoConsultationHistoryRepository.update(d[3]['seq'], newVideoConsultationHistory);

				if (!admin.apps.length) {
					admin.initializeApp({
						credential: admin.credential.cert(serviceAccount),
						databaseURL: 'https://hicare-c18c9.firebaseio.com',
					});
				}

				const token = d[1].token;
				if (token) {
					const registrationToken = token;
					const payload = {
						data: {
							type: 'videocall',
							insung_seq: '' + insung_seq,
							patient_nm: 'test',
							room_id: 'PH_' + d[2]['callSeq'],
							push_seq: d[3]['seq'].toString(),
							call_seq: d[2]['callSeq'].toString(),
							doctor_nm: 'test2',
							appoint_time: moment(new Date()).format('yyyy-MM-dd HH:mm:ss'),
						},
					};

					admin
						.messaging()
						.sendToDevice(registrationToken, payload)
						.then(function (response) {
							console.log('successfully sent messsage', response);
						})
						.catch(function (error) {
							console.log('error sending message: ', error);
						});
				}
				return d[0];
			}),
		);
	}

	startArchive(sessionId: any): Observable<any> {
		const opentokKey = this.configService.get('OPENTOK_KEY');
		const opentokSecret = this.configService.get('OPENTOK_SECRET');

		const client = new OpenTok(opentokKey, opentokSecret);
		const archiveOptions = {
			name: 'Important Presentation',
			hasVideo: true,
		};
		const newSession = function () {
			// *** Return a promise
			return new Promise(function (resolve, reject) {
				client.startArchive(sessionId, archiveOptions, function (err, archive) {
					if (err) {
						reject(err);
					} else {
						// The id property is useful to save off into a database

						resolve(archive.id);
					}
				});
			});
		};
		const val = newSession();
		return from(
			Promise.all([val]).then((d) => {
				return d[0];
			}),
		);
	}

	stopArchive(archiveId: any): Observable<any> {
		const opentokKey = this.configService.get('OPENTOK_KEY');
		const opentokSecret = this.configService.get('OPENTOK_SECRET');

		const client = new OpenTok(opentokKey, opentokSecret);

		const newSession = function () {
			// *** Return a promise
			return new Promise(function (resolve, reject) {
				client.stopArchive(archiveId, function (err, archive) {
					if (err) {
						reject(err);
					} else {
						// The id property is useful to save off into a database
						resolve(archive.id);
					}
				});
			});
		};
		const val = newSession();

		return from(
			Promise.all([val]).then((d) => {
				console.log(d[0]);
				return d[0];
			}),
		);
	}

	getArchive(archiveId: any): Observable<any> {
		const opentokKey = this.configService.get('OPENTOK_KEY');
		const opentokSecret = this.configService.get('OPENTOK_SECRET');

		const client = new OpenTok(opentokKey, opentokSecret);

		const newSession = function () {
			// *** Return a promise
			return new Promise(function (resolve, reject) {
				client.getArchive(archiveId, function (err, archive) {
					if (err) return reject(err.message);
					resolve(archive.url);
				});
			});
		};
		const val = newSession();
		return from(
			Promise.all([val]).then((d) => {
				return d[0];
			}),
		);
	}
}
