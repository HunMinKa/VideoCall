import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('measure_spiro', { schema: 'hicare' })
export class MeasureSpiro {
	@PrimaryGeneratedColumn({ type: 'int', name: 'seq' })
	seq: number;

	@Column('int', { name: 'insung_seq', nullable: true })
	insungSeq: number | null;

	@Column('varchar', { name: 'fvc', nullable: true, length: 50 })
	fvc: string | null;

	@Column('varchar', { name: 'pef', nullable: true, length: 50 })
	pef: string | null;

	@Column('varchar', { name: 'fev1', nullable: true, length: 50 })
	fev1: string | null;

	@Column('varchar', { name: 'fev6', nullable: true, length: 50 })
	fev6: string | null;

	@Column('varchar', { name: 'fev3', nullable: true, length: 50 })
	fev3: string | null;

	@Column('varchar', { name: 'fev1_fvc', nullable: true, length: 50 })
	fev1Fvc: string | null;

	@Column('varchar', { name: 'fef2575', nullable: true, length: 50 })
	fef2575: string | null;

	@Column('varchar', { name: 'fef2550', nullable: true, length: 50 })
	fef2550: string | null;

	@Column('varchar', { name: 'fef5075', nullable: true, length: 50 })
	fef5075: string | null;

	@Column('varchar', { name: 'fef25', nullable: true, length: 50 })
	fef25: string | null;

	@Column('varchar', { name: 'fef50', nullable: true, length: 50 })
	fef50: string | null;

	@Column('varchar', { name: 'fef75', nullable: true, length: 50 })
	fef75: string | null;

	@Column('varchar', { name: 'ev', nullable: true, length: 50 })
	ev: string | null;

	@Column('varchar', { name: 'fet', nullable: true, length: 50 })
	fet: string | null;

	@Column('varchar', { name: 'peft', nullable: true, length: 50 })
	peft: string | null;

	@Column('varchar', { name: 'fivc', nullable: true, length: 50 })
	fivc: string | null;

	@Column('varchar', { name: 'pif', nullable: true, length: 50 })
	pif: string | null;

	@Column('varchar', { name: 'fiv1', nullable: true, length: 50 })
	fiv1: string | null;

	@Column('varchar', { name: 'fit', nullable: true, length: 50 })
	fit: string | null;

	@Column('varchar', { name: 'ela', nullable: true, length: 50 })
	ela: string | null;

	@Column('varchar', { name: 'fiv1_fivc', nullable: true, length: 50 })
	fiv1Fivc: string | null;

	@Column('varchar', { name: 'height', nullable: true, length: 50 })
	height: string | null;

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
