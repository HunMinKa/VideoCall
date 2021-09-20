import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { VideocallService } from './service/videocall.service';
import { VideocallController } from './controller/videocall.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { VideoConsultationHistory } from '../models/entities/VideoConsultationHistory';
import { VideoConsultationArchives } from '../models/entities/VideoConsultationArchives';
import { VideoConsultationMaster } from '../models/entities/VideoConsultationMaster';
import { Patient } from '../models/entities/Patient';
import { DecrtpytAESMiddleware } from 'src/middleware/enc.middleware';
import { ApiLogHistory } from 'src/models/entities/ApiLogHistory';
@Module({
	imports: [
		TypeOrmModule.forFeature([
			VideoConsultationHistory,
			VideoConsultationArchives,
			VideoConsultationMaster,
			Patient,
			ApiLogHistory,
		]),
		AuthModule,
	],
	providers: [VideocallService],
	controllers: [VideocallController],
	exports: [VideocallService],
})
export class VideocallModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(DecrtpytAESMiddleware).forRoutes({ path: 'videocall/*', method: RequestMethod.POST });
	}
}
