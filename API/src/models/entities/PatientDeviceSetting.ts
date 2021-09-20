import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('patient_device_setting', { schema: 'hicare' })
export class PatientDeviceSetting {
	@PrimaryGeneratedColumn({ type: 'int', name: 'seq' })
	seq: number;

	@Column('int', { name: 'insung_seq', nullable: true })
	insungSeq: number | null;

	@Column('varchar', { name: 'measure_type', nullable: true, length: 20 })
	measureType: string | null;

	@Column('varchar', { name: 'device_code', nullable: true, length: 50 })
	deviceCode: string | null;

	@Column('datetime', { name: 'input_utc_dt', nullable: true })
	inputUtcDt: Date | null;
}
