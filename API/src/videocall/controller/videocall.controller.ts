import { Controller, HttpStatus, Res, Req, Post, Get, UseInterceptors, Param } from '@nestjs/common';
import { VideocallService } from '../service/videocall.service';
import { Observable } from 'rxjs';
import { Response, Request } from 'express';
import { ConfigService } from '@nestjs/config';
import { ApiCreatedResponse, ApiForbiddenResponse, ApiTags } from '@nestjs/swagger';
import { Encryptnterceptor } from 'src/Interceptors/enc.Interceptors';
import { map } from 'rxjs/operators';

@ApiTags('Videocall')
@Controller('videocall')
export class VideocallController {
	constructor(private videocallService: VideocallService, private configService: ConfigService) {}
	public currentDate = new Date();

	@Get('/openCall/:insungSeq')
	@ApiCreatedResponse({ description: 'Success' })
	@ApiForbiddenResponse({ description: 'Forbidden' })
	openCall(@Param('insungSeq') insungSeq: string): Observable<unknown> {
		return this.videocallService.openCall(insungSeq);
	}

	@Get('/:callSeq')
	@UseInterceptors(Encryptnterceptor)
	@ApiCreatedResponse({ description: 'Success' })
	@ApiForbiddenResponse({ description: 'Forbidden' })
	getVideoCallInfo(@Req() req: Request, @Res() res: Response, @Param() params): Observable<unknown> {
		return this.videocallService.getVideoCallInfo(params.callSeq);
	}

	@Get('/startArchive/:sessionId')
	@ApiCreatedResponse({ description: 'Success' })
	@ApiForbiddenResponse({ description: 'Forbidden' })
	startArchive(@Req() req: Request, @Param('sessionId') sessionId: string, @Res() res: Response): Observable<unknown> {
		return this.videocallService.startArchive(sessionId).pipe(
			map((data: any) => {
				return res.status(HttpStatus.OK).json(data);
			}),
		);
	}
	@Get('/stopArchive/:archiveId')
	@ApiCreatedResponse({ description: 'Success' })
	@ApiForbiddenResponse({ description: 'Forbidden' })
	stopArchive(@Req() req: Request, @Param('archiveId') archiveId: string, @Res() res: Response): Observable<unknown> {
		console.log(archiveId);
		return this.videocallService.stopArchive(archiveId);
	}
	@Get('/getArchive/:archiveId')
	@ApiCreatedResponse({ description: 'Success' })
	@ApiForbiddenResponse({ description: 'Forbidden' })
	getArchive(@Req() req: Request, @Param('archiveId') archiveId: string, @Res() res: Response): Observable<unknown> {
		console.log(archiveId);
		return this.videocallService.getArchive(archiveId).pipe(
			map((data: any) => {
				return res.status(HttpStatus.OK).json(data);
			}),
		);
	}

	@Post('/respond')
	@ApiCreatedResponse({ description: 'Success' })
	@ApiForbiddenResponse({ description: 'Forbidden' })
	respondToVideoCall(@Req() req: Request, @Res() res: Response): Observable<unknown> {
		return this.videocallService.respondToVideoCall(req.body);
	}
}
