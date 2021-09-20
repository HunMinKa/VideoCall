import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Doctor } from './Doctor';
import { Patient } from './Patient';

@Index('FK_doctor_patient_relation_doctor_seq_doctor_doctor_seq', ['doctorSeq'], {})
@Index('FK_doctor_patient_relation_insung_seq_patient_insung_seq', ['insungSeq'], {})
@Entity('doctor_patient_relation', { schema: 'hicare' })
export class DoctorPatientRelation {
	@PrimaryGeneratedColumn({ type: 'int', name: 'seq' })
	seq: number;

	@Column('int', { name: 'doctor_seq', nullable: true })
	doctorSeq: number | null;

	@Column('int', { name: 'insung_seq', nullable: true })
	insungSeq: number | null;

	@Column('datetime', { name: 'input_utc_dt', nullable: true })
	inputUtcDt: Date | null;

	// @ManyToOne(() => Doctor, (doctor) => doctor.doctorPatientRelations, {
	// 	onDelete: 'RESTRICT',
	// 	onUpdate: 'RESTRICT',
	// })
	@JoinColumn([{ name: 'doctor_seq', referencedColumnName: 'doctorSeq' }])
	doctorSeq2: Doctor;

	@ManyToOne(() => Patient, (patient) => patient.doctorPatientRelations, {
		onDelete: 'RESTRICT',
		onUpdate: 'RESTRICT',
	})
	@JoinColumn([{ name: 'insung_seq', referencedColumnName: 'insungSeq' }])
	insungSeq2: Patient;
}
