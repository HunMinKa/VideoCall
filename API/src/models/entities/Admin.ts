import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Doctor } from './Doctor';
import { Patient } from './Patient';

@Entity('admin', { schema: 'hicare' })
export class Admin {
	@PrimaryGeneratedColumn({ type: 'int', name: 'admin_seq' })
	adminSeq: number;

	@Column('varchar', { name: 'login_id', nullable: true, length: 50 })
	loginId: string | null;

	@Column('varchar', { name: 'password', nullable: true, length: 100 })
	password: string | null;

	@Column('varchar', { name: 'admin_name', nullable: true, length: 50 })
	adminName: string | null;

	@Column('char', { name: 'admin_type', nullable: true, length: 1 })
	adminType: string | null;

	@Column('datetime', { name: 'input_utc_dt', nullable: true })
	inputUtcDt: Date | null;

	@Column('char', { name: 'test_yn', nullable: true, length: 1 })
	testYn: string | null;

	@Column('varchar', { name: 'assess_url', nullable: true, length: 100 })
	assessUrl: string | null;

	@Column('varchar', { name: 'education_url', nullable: true, length: 100 })
	educationUrl: string | null;

	@Column('int', { name: 'serial_quantity', nullable: true })
	serialQuantity: number | null;

	@OneToMany(() => Doctor, (doctor) => doctor.adminSeq2)
	doctors: Doctor[];

	@OneToMany(() => Patient, (patient) => patient.adminSeq2)
	patients: Patient[];
}
