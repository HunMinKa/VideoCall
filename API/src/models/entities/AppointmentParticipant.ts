import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('appointment_participant', { schema: 'hicare' })
export class AppointmentParticipant {
	@PrimaryGeneratedColumn({ type: 'int', name: 'seq' })
	seq: number;

	@Column('int', { name: 'appoint_seq' })
	appointSeq: number;

	@Column('int', { name: 'doctor_seq', nullable: true })
	doctorSeq: number | null;

	@Column('int', { name: 'insung_seq', nullable: true })
	insungSeq: number | null;

	@Column('datetime', { name: 'input_utc_dt', nullable: true })
	inputUtcDt: Date | null;
}
