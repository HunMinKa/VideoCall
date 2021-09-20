import { ApiProperty } from '@nestjs/swagger';
export class Login {
	@ApiProperty()
	loginId: string;
	@ApiProperty()
	password: string;
	@ApiProperty()
	symKey: string;
	@ApiProperty()
	uuid: string;
	@ApiProperty()
	uuidUpdateYn: string;
	@ApiProperty()
	osVersion: string;
	@ApiProperty()
	flag: string;
}

export class Autologin {
	@ApiProperty()
	insungSeq: string;
	@ApiProperty()
	symetricKey: string;
	@ApiProperty()
	uuid: string;
}

export class Token {
	@ApiProperty()
	token: string;
}

export class SymetricKey {
	@ApiProperty()
	symetricKey: string;
}

export class Message {
	@ApiProperty()
	insungSeq: string;
	@ApiProperty()
	doctorSeq: string;
	@ApiProperty()
	message: string;
}

export class ProfileImage {
	@ApiProperty()
	profileImage: string;
	@ApiProperty()
	fileInfo: string;
}

export class AppSetting {
	@ApiProperty()
	insungSeq: string;
	@ApiProperty()
	sessionTimeOut: string;
	@ApiProperty()
	turnOffTimeOut: string;
	@ApiProperty()
	softwareVersion: string;
	@ApiProperty()
	hardwareVersion: string;
}

export class DeviceSetting {
	@ApiProperty()
	insungSeq: string;
	@ApiProperty()
	measureType: string;
	@ApiProperty()
	deviceCode: string;
}
export class Appoint {
	@ApiProperty()
	doctorSeq: string;
	@ApiProperty()
	insungSeq: string;
	@ApiProperty()
	appointDt: string;
	@ApiProperty()
	startTime: string;
	@ApiProperty()
	endTime: string;
}

export class AppointDelete {
	@ApiProperty()
	appointSeq: [];
}
