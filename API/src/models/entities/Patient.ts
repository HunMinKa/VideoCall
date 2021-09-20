import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { DoctorPatientRelation } from './DoctorPatientRelation';
import { MeasureTotal } from './MeasureTotal';
import { Admin } from './Admin';
import { ApiProperty } from '@nestjs/swagger';
@Index('FK_patient_admin_seq_admin_admin_seq', ['adminSeq'], {})
@Entity('patient', { schema: 'hicare' })
export class Patient {
	@ApiProperty()
	@PrimaryGeneratedColumn({ type: 'int', name: 'insung_seq' })
	insungSeq: number;

	@ApiProperty()
	@Column('varchar', { name: 'login_id', nullable: true, length: 50 })
	loginId: string | null;

	@ApiProperty()
	@Column('varchar', { name: 'password', nullable: true, length: 100 })
	password: string | null;

	@ApiProperty()
	@Column('varchar', { name: 'pid', nullable: true, length: 50 })
	pid: string | null;

	@ApiProperty()
	@Column('varchar', { name: 'first_name', nullable: true, length: 200 })
	firstName: string | null;

	@ApiProperty()
	@Column('varchar', { name: 'middle_name', nullable: true, length: 200 })
	middleName: string | null;

	@ApiProperty()
	@Column('varchar', { name: 'last_name', nullable: true, length: 200 })
	lastName: string | null;

	@ApiProperty()
	@Column('varchar', { name: 'dob', nullable: true, length: 200 })
	dob: string | null;

	@Column('varchar', { name: 'gender', nullable: true, length: 200 })
	gender: string | null;

	@Column('varchar', { name: 'height_value', nullable: true, length: 10 })
	heightValue: string | null;

	@Column('varchar', { name: 'height_unit', nullable: true, length: 10 })
	heightUnit: string | null;

	@Column('datetime', { name: 'input_utc_dt', nullable: true })
	inputUtcDt: Date | null;

	@Column('datetime', { name: 'update_utc_dt', nullable: true })
	updateUtcDt: Date | null;

	@Column('int', { name: 'admin_seq', nullable: true })
	adminSeq: number | null;

	@Column('varchar', { name: 'token', nullable: true, length: 200 })
	token: string | null;

	@Column('varchar', { name: 'uuid', nullable: true, length: 100 })
	uuid: string | null;

	@Column('varchar', { name: 'sym_key', nullable: true, length: 100 })
	symKey: string | null;

	@Column('datetime', { name: 'expire_dt', nullable: true })
	expireDt: Date | null;

	@Column('char', { name: 'svc_agree_yn', nullable: true, length: 1 })
	svcAgreeYn: string | null;

	@Column('varchar', { name: 'thai_name', nullable: true, length: 100 })
	thaiName: string | null;

	@Column('varchar', { name: 'en_name', nullable: true, length: 100 })
	enName: string | null;

	@Column('varchar', { name: 'card_issue', nullable: true, length: 50 })
	cardIssue: string | null;

	@Column('varchar', { name: 'issue_date', nullable: true, length: 50 })
	issueDate: string | null;

	@Column('varchar', { name: 'expire_date', nullable: true, length: 50 })
	expireDate: string | null;

	@Column('varchar', { name: 'address', nullable: true, length: 200 })
	address: string | null;

	@Column('longblob', { name: 'photo', nullable: true })
	photo: Buffer | null;

	@Column('varchar', { name: 'profile_image', nullable: true, length: 100 })
	profileImage: string | null;

	@Column('int', { name: 'session_timeout', nullable: true })
	sessionTimeout: number | null;

	@Column('int', { name: 'turnoff_timeout', nullable: true })
	turnoffTimeout: number | null;

	@Column('varchar', { name: 'hw_version', nullable: true, length: 50 })
	hwVersion: string | null;

	@Column('varchar', { name: 'sw_version', nullable: true, length: 50 })
	swVersion: string | null;

	@OneToMany(() => DoctorPatientRelation, (doctorPatientRelation) => doctorPatientRelation.insungSeq2)
	doctorPatientRelations: DoctorPatientRelation[];

	@OneToMany(() => MeasureTotal, (measureTotal) => measureTotal.insungSeq2)
	measureTotals: MeasureTotal[];

	@ManyToOne(() => Admin, (admin) => admin.patients, {
		onDelete: 'RESTRICT',
		onUpdate: 'RESTRICT',
	})
	@JoinColumn([{ name: 'admin_seq', referencedColumnName: 'adminSeq' }])
	adminSeq2: Admin;
}
