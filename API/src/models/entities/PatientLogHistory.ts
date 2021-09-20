import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('patient_log_history', { schema: 'hicare' })
export class PatientLogHistory {
	@PrimaryGeneratedColumn({ type: 'int', name: 'seq' })
	seq: number;

	@Column('int', { name: 'insung_seq', nullable: true })
	insungSeq: number | null;

	@Column('varchar', { name: 'device_id', nullable: true, length: 50 })
	deviceId: string | null;

	@Column('datetime', { name: 'input_utc_dt', nullable: true })
	inputUtcDt: Date | null;

	@Column('datetime', { name: 'logout_utc_dt', nullable: true })
	logoutUtcDt: Date | null;

	@Column('varchar', { name: 'osVersion', nullable: true, length: 45 })
	osVersion: string | null;
}
