import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('measure_pef', { schema: 'hicare' })
export class MeasurePef {
	@PrimaryGeneratedColumn({ type: 'int', name: 'seq' })
	seq: number;

	@Column('int', { name: 'insung_seq', nullable: true })
	insungSeq: number | null;

	@Column('varchar', { name: 'pef', nullable: true, length: 50 })
	pef: string | null;

	@Column('varchar', { name: 'fev1', nullable: true, length: 50 })
	fev1: string | null;

	@Column('varchar', { name: 'measure_date', nullable: true, length: 14 })
	measureDate: string | null;

	@Column('datetime', { name: 'input_utc_dt', nullable: true })
	inputUtcDt: Date | null;

	@Column('varchar', { name: 'measure_device', nullable: true, length: 50 })
	measureDevice: string | null;

	@Column('int', { name: 'timezone_offset', nullable: true })
	timezoneOffset: number | null;

	@Column('datetime', { name: 'measure_utc_dt', nullable: true })
	measureUtcDt: Date | null;

	@Column('varchar', { name: 'auto_timezone', nullable: true, length: 1 })
	autoTimezone: string | null;

	@Column('varchar', { name: 'device_code', nullable: true, length: 50 })
	deviceCode: string | null;
}
