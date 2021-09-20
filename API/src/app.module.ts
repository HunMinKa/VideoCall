import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginModule } from './login/login.module';
import { AuthModule } from './auth/auth.module';
import { DoctorModule } from './doctor/doctor.module';
import { PatientModule } from './patient/patient.module';
import { MeasureModule } from './measure/measure.module';
import { VideocallModule } from './videocall/videocall.module';
import { RawBodyMiddleware } from './middleware/raw-body.middleware';
import { JsonBodyMiddleware } from './middleware/json-body.middleware';
import { LogModule } from './log/log.module';
import { LicenceModule } from './licence/licence.module';
@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true }),
		TypeOrmModule.forRoot({
			type: 'mysql',
			host: '52.78.185.96',
			//host: 'localhost',
			database: 'hicare',
			port: 3306,
			autoLoadEntities: true,
			synchronize: false,
			username: 'hmka',
			password: 'hicare1234!',
			extra: {
				options: {
					trustedConnection: true,
					useUTC: false,
					enableArithAbort: true,
					encrypt: false,
				},
			},
		}),
		LoginModule,
		DoctorModule,
		PatientModule,
		MeasureModule,
		VideocallModule,
		AuthModule,
		LogModule,
		LicenceModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule implements NestModule {
	public configure(consumer: MiddlewareConsumer): void {
		consumer
			.apply(RawBodyMiddleware)
			.forRoutes({
				path: '/stripe-webhooks',
				method: RequestMethod.POST,
			})
			.apply(JsonBodyMiddleware)
			.forRoutes('*');
	}
}
