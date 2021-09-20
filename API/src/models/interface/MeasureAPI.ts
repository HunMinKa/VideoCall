import { ApiProperty } from '@nestjs/swagger';
export class BloodPressure {
	@ApiProperty() insungSeq: string;
	@ApiProperty() deviceId: string;
	@ApiProperty() measureDate: string;
	@ApiProperty() timezoneOffset: string;
	@ApiProperty() measureUtcDt: string;
	@ApiProperty() inputUtcDt: string;
	@ApiProperty() deviceCode: string;
	@ApiProperty() directInputYn: string;
	@ApiProperty() irregularHeartbeat: string;
	@ApiProperty() autoTimezone: string;
	@ApiProperty() measureUnit: string;
	@ApiProperty() measureValue: string;
	@ApiProperty() measureType: string;
}

export class BloodSugar {
	@ApiProperty() insungSeq: string;
	@ApiProperty() measureDate: string;
	@ApiProperty() timezoneOffset: string;
	@ApiProperty() bloodSuga: string;
	@ApiProperty() bloodHct: string;
	@ApiProperty() measureUnit: string;
	@ApiProperty() deviceCode: string;
	@ApiProperty() directInputYn: string;
	@ApiProperty() autoTimezone: string;
}

export class BodyComposition {
	@ApiProperty() insungSeq: string;
	@ApiProperty() measureDate: string;
	@ApiProperty() timezoneOffset: string;
	@ApiProperty() weight: string;
	@ApiProperty() weightUnit: string;
	@ApiProperty() height: string;
	@ApiProperty() heightUnit: string;
	@ApiProperty() bmi: string;
	@ApiProperty() bodyFat: string;
	@ApiProperty() deviceCode: string;
	@ApiProperty() directInputYn: string;
	@ApiProperty() autoTimezone: string;
}

export class OxygenSaturation {
	@ApiProperty() insungSeq: string;
	@ApiProperty() measureDate: string;
	@ApiProperty() timezoneOffset: string;
	@ApiProperty() deviceCode: string;
	@ApiProperty() directInputYn: string;
	@ApiProperty() autoTimezone: string;
	@ApiProperty() spo2: string;
	@ApiProperty() pulse: string;
}

export class ContinuousOX {
	@ApiProperty() insungSeq: string;
	@ApiProperty() measureDate: string;
	@ApiProperty() timezoneOffset: string;
	@ApiProperty() deviceCode: string;
	@ApiProperty() autoTimezone: string;
	@ApiProperty() oXData: string;
}

export class BodyTemperature {
	@ApiProperty() insungSeq: string;
	@ApiProperty() measureDate: string;
	@ApiProperty() timezoneOffset: string;
	@ApiProperty() deviceCode: string;
	@ApiProperty() directInputYn: string;
	@ApiProperty() autoTimezone: string;
	@ApiProperty() bodyTemp: string;
	@ApiProperty() unit: string;
	@ApiProperty() measurePart: string;
}

export class Cholesterol {
	@ApiProperty() insungSeq: string;
	@ApiProperty() measureDate: string;
	@ApiProperty() timezoneOffset: string;
	@ApiProperty() deviceCode: string;
	@ApiProperty() directInputYn: string;
	@ApiProperty() autoTimezone: string;
	@ApiProperty() tc: string;
	@ApiProperty() tg: string;
	@ApiProperty() hdl: string;
	@ApiProperty() ldl: string;
	@ApiProperty() tcHdlRatio: string;
	@ApiProperty() unit: string;
}

export class Hba1c {
	@ApiProperty() insungSeq: string;
	@ApiProperty() measureDate: string;
	@ApiProperty() timezoneOffset: string;
	@ApiProperty() deviceCode: string;
	@ApiProperty() directInputYn: string;
	@ApiProperty() autoTimezone: string;
	@ApiProperty() hba1c: string;
	@ApiProperty() unit: string;
}
export class Ketone {
	@ApiProperty() insungSeq: string;
	@ApiProperty() measureDate: string;
	@ApiProperty() timezoneOffset: string;
	@ApiProperty() deviceCode: string;
	@ApiProperty() directInputYn: string;
	@ApiProperty() autoTimezone: string;
	@ApiProperty() ketone: string;
	@ApiProperty() unit: string;
}

export class Inr {
	@ApiProperty() insungSeq: string;
	@ApiProperty() measureDate: string;
	@ApiProperty() timezoneOffset: string;
	@ApiProperty() deviceCode: string;
	@ApiProperty() directInputYn: string;
	@ApiProperty() autoTimezone: string;

	@ApiProperty() inr: string;
	@ApiProperty() pt: string;
	@ApiProperty() percentQ: string;
}

export class UrineSpot {
	@ApiProperty() insungSeq: string;
	@ApiProperty() measureDate: string;
	@ApiProperty() timezoneOffset: string;
	@ApiProperty() deviceCode: string;
	@ApiProperty() directInputYn: string;
	@ApiProperty() autoTimezone: string;

	@ApiProperty() uacr: string;
	@ApiProperty() albumin: string;
	@ApiProperty() creatinine: string;
	@ApiProperty() unit: string;
}

export class UricAcid {
	@ApiProperty() insungSeq: string;
	@ApiProperty() measureDate: string;
	@ApiProperty() timezoneOffset: string;
	@ApiProperty() deviceCode: string;
	@ApiProperty() directInputYn: string;
	@ApiProperty() autoTimezone: string;

	@ApiProperty() ua: string;
	@ApiProperty() unit: string;
}

export class BenecheckUrin {
	@ApiProperty() insungSeq: string;
	@ApiProperty() measureDate: string;
	@ApiProperty() timezoneOffset: string;
	@ApiProperty() deviceCode: string;
	@ApiProperty() directInputYn: string;
	@ApiProperty() autoTimezone: string;

	@ApiProperty() urine: string;
	@ApiProperty() unit: string;
}

export class UrineStick {
	@ApiProperty() insungSeq: string;
	@ApiProperty() measureDate: string;
	@ApiProperty() timezoneOffset: string;
	@ApiProperty() deviceCode: string;
	@ApiProperty() autoTimezone: string;

	@ApiProperty() ob: string;
	@ApiProperty() obResult: string;
	@ApiProperty() bil: string;
	@ApiProperty() bilResult: string;
	@ApiProperty() uro: string;
	@ApiProperty() uroResult: string;
	@ApiProperty() ket: string;
	@ApiProperty() ketResult: string;
	@ApiProperty() pro: string;
	@ApiProperty() proResult: string;
	@ApiProperty() nit: string;
	@ApiProperty() nitResult: string;
	@ApiProperty() glu: string;
	@ApiProperty() gluResult: string;
	@ApiProperty() ph: string;
	@ApiProperty() phResult: string;
	@ApiProperty() leu: string;
	@ApiProperty() leuResult: string;
	@ApiProperty() sg: string;
	@ApiProperty() sgResult: string;
}

export class Ecg {
	@ApiProperty() insungSeq: string;
	@ApiProperty() measureDate: string;
	@ApiProperty() timezoneOffset: string;
	@ApiProperty() deviceCode: string;
	@ApiProperty() autoTimezone: string;

	@ApiProperty() lead1: string;
	@ApiProperty() lead2: string;
	@ApiProperty() lead3: string;
	@ApiProperty() v1: string;
	@ApiProperty() v2: string;
	@ApiProperty() v3: string;
	@ApiProperty() v4: string;
	@ApiProperty() v5: string;
	@ApiProperty() v6: string;
	@ApiProperty() pacePulse: string;
	@ApiProperty() diagCode: string;
	@ApiProperty() pAxis: string;
	@ApiProperty() ppInterval: string;
	@ApiProperty() prInterval: string;
	@ApiProperty() qrs: string;
	@ApiProperty() qt: string;
	@ApiProperty() qtc: string;
	@ApiProperty() rAxis: string;
	@ApiProperty() rrInterval: string;
	@ApiProperty() tAxis: string;
	@ApiProperty() heartRateInstant: string;
}
export class Ecg2 {
	@ApiProperty() insungSeq: string;
	@ApiProperty() measureDate: string;
	@ApiProperty() timezoneOffset: string;
	@ApiProperty() deviceCode: string;
	@ApiProperty() autoTimezone: string;

	@ApiProperty() lead1: string;
	@ApiProperty() lead2: string;
	@ApiProperty() v1: string;
	@ApiProperty() v2: string;
	@ApiProperty() v3: string;
	@ApiProperty() v4: string;
	@ApiProperty() v5: string;
	@ApiProperty() v6: string;
	@ApiProperty() hr: string;
	@ApiProperty() pr: string;
	@ApiProperty() qrs: string;
	@ApiProperty() qt: string;
	@ApiProperty() qtc: string;
	@ApiProperty() pQrsTQrst: string;
	@ApiProperty() qtr: string;
	@ApiProperty() rv5: string;
	@ApiProperty() sv1: string;
	@ApiProperty() pa: string;
	@ApiProperty() pa_: string;
	@ApiProperty() qa: string;
	@ApiProperty() ra: string;
	@ApiProperty() ra_: string;
	@ApiProperty() sa: string;
	@ApiProperty() ta: string;
	@ApiProperty() pd: string;
	@ApiProperty() qd: string;
	@ApiProperty() rd: string;
	@ApiProperty() rd_: string;
	@ApiProperty() pr_: string;
	@ApiProperty() qt_: string;
	@ApiProperty() st: string;
	@ApiProperty() sts: string;
	@ApiProperty() tf: string;
	@ApiProperty() summary: string;
	@ApiProperty() resolution: string;
	@ApiProperty() rr: string;
}
export class Ecg3 {
	@ApiProperty() insungSeq: string;
	@ApiProperty() measureDate: string;
	@ApiProperty() timezoneOffset: string;
	@ApiProperty() deviceCode: string;
	@ApiProperty() autoTimezone: string;

	@ApiProperty() pdfFile: string;
	@ApiProperty() bpm: string;
	@ApiProperty() pr: string;
	@ApiProperty() qrs: string;
	@ApiProperty() rr: string;
	@ApiProperty() qt: string;
	@ApiProperty() qtc: string;
}
export class Spirometer {
	@ApiProperty() insungSeq: string;
	@ApiProperty() measureDate: string;
	@ApiProperty() timezoneOffset: string;
	@ApiProperty() deviceCode: string;
	@ApiProperty() autoTimezone: string;

	@ApiProperty() fvc: string;
	@ApiProperty() pef: string;
	@ApiProperty() fev1: string;
	@ApiProperty() fev6: string;
	@ApiProperty() fev3: string;
	@ApiProperty() fef2575: string;
	@ApiProperty() fef2550: string;
	@ApiProperty() fef5075: string;
	@ApiProperty() fef25: string;
	@ApiProperty() fef50: string;
	@ApiProperty() fef75: string;
	@ApiProperty() ev: string;
	@ApiProperty() fet: string;
	@ApiProperty() peft: string;
	@ApiProperty() fivc: string;
	@ApiProperty() pif: string;
	@ApiProperty() fiv1: string;
	@ApiProperty() fit: string;
	@ApiProperty() ela: string;

	@ApiProperty() height: string;
}
export class Pef {
	@ApiProperty() insungSeq: string;
	@ApiProperty() measureDate: string;
	@ApiProperty() timezoneOffset: string;
	@ApiProperty() deviceCode: string;
	@ApiProperty() autoTimezone: string;
	@ApiProperty() pef: string;
	@ApiProperty() fev1: string;
}
export class Asma1 {
	@ApiProperty() insungSeq: string;
	@ApiProperty() measureDate: string;
	@ApiProperty() timezoneOffset: string;
	@ApiProperty() deviceCode: string;
	@ApiProperty() autoTimezone: string;
	@ApiProperty() bestPef: string;
	@ApiProperty() bestFev1: string;
	@ApiProperty() pefPersonalBest: string;
	@ApiProperty() fev1PersonalBest: string;
	@ApiProperty() bestPefP: string;
	@ApiProperty() bestFev1P: string;
	@ApiProperty() greenZone: string;
	@ApiProperty() yellowZone: string;
	@ApiProperty() orangeZone: string;
	@ApiProperty() badTestBestPef: string;
	@ApiProperty() badTestBestFev1: string;
	@ApiProperty() swVersionNumber: string;
	@ApiProperty() swNumber: string;
	@ApiProperty() numberBlows: string;
	@ApiProperty() numberGoodBlows: string;
	@ApiProperty() accessoryId: string;
}
export class Copd6 {
	@ApiProperty() insungSeq: string;
	@ApiProperty() measureDate: string;
	@ApiProperty() timezoneOffset: string;
	@ApiProperty() deviceCode: string;
	@ApiProperty() autoTimezone: string;
	@ApiProperty() gender: string;
	@ApiProperty() age: string;
	@ApiProperty() height: string;
	@ApiProperty() weight: string;
	@ApiProperty() tests: string;
	s;
	@ApiProperty() goodTests: string;
	@ApiProperty() fev1Within: string;
	@ApiProperty() fev6Within: string;
	@ApiProperty() fev1Predicted: string;
	@ApiProperty() fev1Best1: string;
	@ApiProperty() fev1Best2: string;
	@ApiProperty() fev1Best3: string;
	@ApiProperty() fev1MeasuredBest: string;
	@ApiProperty() fev1PPred: string;
	@ApiProperty() fev6Predicted: string;
	@ApiProperty() fev6Best1: string;
	@ApiProperty() fev6Best2: string;
	@ApiProperty() fev6Best3: string;
	@ApiProperty() fev6MeasuredBest: string;
	@ApiProperty() fev6PPred: string;
	@ApiProperty() fev1Fev6Predicted: string;
	@ApiProperty() fev1Fev6Best1: string;
	@ApiProperty() fev1Fev6Best2: string;
	@ApiProperty() fev1Fev6Best3: string;
	@ApiProperty() fev1Fev6MeasuredBest: string;
	@ApiProperty() fev1Fev6PPred: string;
	@ApiProperty() greenZone: string;
	@ApiProperty() yellowZone: string;
	@ApiProperty() orangeZone: string;
	@ApiProperty() swVersionNumber: string;
	@ApiProperty() firmwareNumber: string;
	@ApiProperty() sessionTimeUpdatedFlag: string;
	@ApiProperty() accessoryId: string;
	@ApiProperty() regression: string;
	@ApiProperty() lungAge: string;
}
export class LungMonitor {
	@ApiProperty() insungSeq: string;
	@ApiProperty() measureDate: string;
	@ApiProperty() timezoneOffset: string;
	@ApiProperty() deviceCode: string;
	@ApiProperty() autoTimezone: string;
	@ApiProperty() bestPef: string;
	@ApiProperty() bestFev1: string;
	@ApiProperty() bestFev6: string;
	@ApiProperty() bestFev75: string;
	@ApiProperty() bestFev1Fev6: string;
	@ApiProperty() bestFef2575: string;
	@ApiProperty() pefPersonalBest: string;
	@ApiProperty() fev1PersonalBest: string;
	@ApiProperty() bestPefP: string;
	@ApiProperty() bestFev1P: string;
	@ApiProperty() greenZone: string;
	@ApiProperty() yellowZone: string;
	@ApiProperty() orangeZone: string;
	@ApiProperty() badTestPef: string;
	@ApiProperty() badTestFev1: string;
	@ApiProperty() badTestFev6: string;
	@ApiProperty() badTestFev75: string;
	@ApiProperty() badTestFev2575: string;
	@ApiProperty() goodTest: string;
	@ApiProperty() swVersionNumber: string;
	@ApiProperty() swNumber: string;
	@ApiProperty() numberBlows: string;
	@ApiProperty() numberGoodBlows: string;
	@ApiProperty() accessoryId: string;
}
export class Microscope {
	@ApiProperty() insungSeq: string;
	@ApiProperty() measureDate: string;
	@ApiProperty() timezoneOffset: string;
	@ApiProperty() deviceCode: string;
	@ApiProperty() autoTimezone: string;
	@ApiProperty() contents: string;
	@ApiProperty() thumbnail: string;
}
export class Stethoscope {
	@ApiProperty() insungSeq: string;
	@ApiProperty() measureDate: string;
	@ApiProperty() timezoneOffset: string;
	@ApiProperty() deviceCode: string;
	@ApiProperty() autoTimezone: string;

	@ApiProperty() contents: string;
}
export class Photo {
	@ApiProperty() insungSeq: string;
	@ApiProperty() measureDate: string;
	@ApiProperty() timezoneOffset: string;
	@ApiProperty() deviceCode: string;
	@ApiProperty() deviceId: string;
	@ApiProperty() autoTimezone: string;
	@ApiProperty() appVersion: string;
	@ApiProperty() thumbnail: string;
	@ApiProperty() contents: string;
}
export class Capnography {
	@ApiProperty() insungSeq: string;
	@ApiProperty() measureDate: string;
	@ApiProperty() timezoneOffse: string;
	@ApiProperty() deviceCode: string;
	@ApiProperty() autoTimezone: string;
	@ApiProperty() interval: string;
	@ApiProperty() capnograph: string;
}
export class Waist {
	@ApiProperty() insungSeq: string;
	@ApiProperty() measureDate: string;
	@ApiProperty() timezoneOffset: string;
	@ApiProperty() deviceCode: string;
	@ApiProperty() directInputYn: string;
	@ApiProperty() autoTimezone: string;

	@ApiProperty() waistValue: string;
	@ApiProperty() unit: string;
}
export class Wearable {
	@ApiProperty() insungSeq: string;
	@ApiProperty() measureDate: string;
	@ApiProperty() timezoneOffset: string;
	@ApiProperty() deviceCode: string;
	@ApiProperty() directInputYn: string;
	@ApiProperty() autoTimezone: string;

	@ApiProperty() steps: string;
}
export class Recent {
	@ApiProperty() insungSeq: string;
	@ApiProperty() measureDevice: string;
}

export class Table {
	@ApiProperty() page: string;
	@ApiProperty() pageSize: string;
	@ApiProperty() fromDate: string;
	@ApiProperty() toDate: string;
	@ApiProperty() insungSeq: string;
	@ApiProperty() measureDevice: string;
}
