import { DoctorPatientRelation } from '../entities/DoctorPatientRelation';
import { MeasureTotal } from '../entities/MeasureTotal';
import { Admin } from '../entities/Admin';

export interface PatientI {
	insungSeq: number;
	loginId: string | null;
	password: string | null;
	pid: string | null;
	firstName: string | null;
	middleName: string | null;
	lastName: string | null;
	dob: string | null;
	gender: string | null;
	heightValue: string | null;
	heightUnit: string | null;
	inputUtcDt: Date | null;
	updateUtcDt: Date | null;
	adminSeq: number | null;
	token: string | null;
	uuid: string | null;
	symKey: string | null;
	expireDt: Date | null;
	svcAgreeYn: string | null;
	thaiName: string | null;
	enName: string | null;
	cardIssue: string | null;
	issueDate: string | null;
	expireDate: string | null;
	address: string | null;
	photo: Buffer | null;
	profileImage: string | null;
	sessionTimeout: number | null;
	turnoffTimeout: number | null;
	hwVersion: string | null;
	swVersion: string | null;
	doctorPatientRelations: DoctorPatientRelation[];
	measureTotals: MeasureTotal[];
	adminSeq2: Admin;
}
