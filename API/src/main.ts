import { NestFactory } from '@nestjs/core';
import * as express from 'express';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import session from 'express-session';
import f = require('session-file-store');
import { AllExceptionsFilter } from './Exception/exception';
async function bootstrap() {
	// const httpsOptions = {
	// 	key: fs.readFileSync('/etc/letsencrypt/live/dev-api.hicare.net/private.pem'),
	// 	cert: fs.readFileSync('/etc/letsencrypt/live/dev-api.hicare.net/cert.pem'),
	// };
	const app = await NestFactory.create(AppModule, {
		bodyParser: false,
	});
	//app.useGlobalFilters(new AllExceptionsFilter());
	app.enableCors();
	const FileStore = f(session);
	//app.setGlobalPrefix('api')
	const options = new DocumentBuilder().setTitle('Hicare API').setDescription('Hicarea API').setVersion('3.0').build();

	const doc = SwaggerModule.createDocument(app, options);
	SwaggerModule.setup('api', app, doc);

	const rawBodyBuffer = (req, res, buf, encoding) => {
		if (buf && buf.length) {
			req.rawBody = buf.toString(encoding || 'utf8');
		}
	};

	app.use(express.urlencoded({ verify: rawBodyBuffer, extended: true }));
	app.use(express.json({ verify: rawBodyBuffer }));

	app.use(
		session({
			secret: 'hmka',
			resave: false,
			saveUninitialized: true,
			store: new FileStore(),
		}),
	);
	await app.listen(3000);
}
bootstrap();
