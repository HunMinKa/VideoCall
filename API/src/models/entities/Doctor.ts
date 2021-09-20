import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Admin } from './Admin';
import { DoctorLogHistory } from './DoctorLogHistory';
import { DoctorPatientRelation } from './DoctorPatientRelation';
import { DoctorSubscription } from './DoctorSubscription';
import { Patient } from './Patient';
@Index('FK_doctor_admin_seq_admin_admin_seq', ['adminSeq'], {})
@Entity('doctor', { schema: 'hicare' })
export class Doctor {
	@PrimaryGeneratedColumn({ type: 'int', name: 'doctor_seq' })
	doctorSeq: number;

	@Column('varchar', { name: 'login_id', length: 50 })
	loginId: string;

	@Column('varchar', { name: 'password', nullable: true, length: 100 })
	password: string | null;

	@Column('varchar', { name: 'first_name', nullable: true, length: 200 })
	firstName: string | null;

	@Column('varchar', { name: 'middle_name', nullable: true, length: 200 })
	middleName: string | null;

	@Column('varchar', { name: 'last_name', nullable: true, length: 200 })
	lastName: string | null;

	@Column('varchar', { name: 'bldsgr_unit', nullable: true, length: 10 })
	bldsgrUnit: string | null;

	@Column('varchar', { name: 'weight_unit', nullable: true, length: 10 })
	weightUnit: string | null;

	@Column('varchar', { name: 'height_unit', nullable: true, length: 10 })
	heightUnit: string | null;

	@Column('varchar', { name: 'bodytemp_unit', nullable: true, length: 10 })
	bodytempUnit: string | null;

	@Column('varchar', { name: 'cholesterol_unit', nullable: true, length: 10 })
	cholesterolUnit: string | null;

	@Column('varchar', { name: 'hba1c_unit', nullable: true, length: 10 })
	hba1cUnit: string | null;

	@Column('varchar', { name: 'ua_unit', nullable: true, length: 10 })
	uaUnit: string | null;

	@Column('varchar', { name: 'ketone_unit', nullable: true, length: 50 })
	ketoneUnit: string | null;

	@Column('char', { name: 'role', nullable: true, length: 1 })
	role: string | null;

	@Column('datetime', { name: 'input_utc_dt', nullable: true })
	inputUtcDt: Date | null;

	@Column('char', { name: 'svc_agree_yn', nullable: true, length: 1 })
	svcAgreeYn: string | null;

	@Column('int', { name: 'admin_seq', nullable: true })
	adminSeq: number | null;

	@ManyToOne(() => Admin, (admin) => admin.doctors, {
		onDelete: 'RESTRICT',
		onUpdate: 'RESTRICT',
	})
	@JoinColumn([{ name: 'admin_seq', referencedColumnName: 'adminSeq' }])
	adminSeq2: Admin;

	@OneToMany(() => DoctorLogHistory, (doctorLogHistory) => doctorLogHistory.doctorSeq2)
	doctorLogHistories: DoctorLogHistory[];

	@OneToMany(() => DoctorPatientRelation, (doctorPatientRelation) => doctorPatientRelation.doctorSeq2)
	doctorPatientRelations: DoctorPatientRelation[];

	@OneToOne(() => DoctorSubscription, (doctorSubscription) => doctorSubscription.doctorSeq2)
	doctorSubscription: DoctorSubscription;

	patient!: Patient;
}
