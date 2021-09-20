import { ManyToOne, JoinColumn } from 'typeorm';
import { Admin } from '../entities/Admin';
import { DoctorLogHistory } from '../entities/DoctorLogHistory';
import { DoctorPatientRelation } from '../entities/DoctorPatientRelation';
import { DoctorSubscription } from '../entities/DoctorSubscription';

export class DoctorI {
	doctorSeq: number;
	loginId: string;
	password: string | null;
	firstName: string | null;
	middleName: string | null;
	lastName: string | null;
	bldsgrUnit: string | null;
	weightUnit: string | null;
	bodytempUnit: string | null;
	cholesterolUnit: string | null;
	hba1cUnit: string | null;
	uaUnit: string | null;
	ketoneUnit: string | null;
	role: string | null;
	inputUtcDt: Date | null;
	svcAgreeYn: string | null;
	adminSeq: number | null;
	@ManyToOne(() => Admin, (admin) => admin.doctors, {
		onDelete: 'RESTRICT',
		onUpdate: 'RESTRICT',
	})
	@JoinColumn([{ name: 'admin_seq', referencedColumnName: 'adminSeq' }])
	adminSeq2: Admin;
	doctorLogHistories: DoctorLogHistory[];
	doctorPatientRelations: DoctorPatientRelation[];
	doctorSubscription: DoctorSubscription;
}
