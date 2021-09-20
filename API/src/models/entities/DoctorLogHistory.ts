import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Doctor } from './Doctor';

@Index('FK_doctor_log_history_doctor_seq_doctor_doctor_seq', ['doctorSeq'], {})
@Entity('doctor_log_history', { schema: 'hicare' })
export class DoctorLogHistory {
	@PrimaryGeneratedColumn({ type: 'int', name: 'seq' })
	seq: number;

	@Column('int', { name: 'doctor_seq', nullable: true })
	doctorSeq: number | null;

	@Column('datetime', { name: 'input_utc_dt', nullable: true })
	inputUtcDt: Date | null;

	@Column('datetime', { name: 'logout_utc_dt', nullable: true })
	logoutUtcDt: Date | null;

	@ManyToOne(() => Doctor, (doctor) => doctor.doctorLogHistories, {
		onDelete: 'RESTRICT',
		onUpdate: 'RESTRICT',
	})
	@JoinColumn([{ name: 'doctor_seq', referencedColumnName: 'doctorSeq' }])
	doctorSeq2: Doctor;
}
