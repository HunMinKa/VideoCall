import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('measure_urine', { schema: 'hicare' })
export class MeasureUrine {
	@PrimaryGeneratedColumn({ type: 'int', name: 'seq' })
	seq: number;

	@Column('int', { name: 'insung_seq', nullable: true })
	insungSeq: number | null;

	@Column('varchar', { name: 'uro', nullable: true, length: 10 })
	uro: string | null;

	@Column('varchar', { name: 'uro_result', nullable: true, length: 10 })
	uroResult: string | null;

	@Column('varchar', { name: 'glu', nullable: true, length: 10 })
	glu: string | null;

	@Column('varchar', { name: 'glu_result', nullable: true, length: 10 })
	gluResult: string | null;

	@Column('varchar', { name: 'bil', nullable: true, length: 10 })
	bil: string | null;

	@Column('varchar', { name: 'bil_result', nullable: true, length: 10 })
	bilResult: string | null;

	@Column('varchar', { name: 'ket', nullable: true, length: 10 })
	ket: string | null;

	@Column('varchar', { name: 'ket_result', nullable: true, length: 10 })
	ketResult: string | null;

	@Column('varchar', { name: 'sg', nullable: true, length: 10 })
	sg: string | null;

	@Column('varchar', { name: 'sg_result', nullable: true, length: 10 })
	sgResult: string | null;

	@Column('varchar', { name: 'ob', nullable: true, length: 10 })
	ob: string | null;

	@Column('varchar', { name: 'ob_result', nullable: true, length: 10 })
	obResult: string | null;

	@Column('varchar', { name: 'ph', nullable: true, length: 10 })
	ph: string | null;

	@Column('varchar', { name: 'ph_result', nullable: true, length: 10 })
	phResult: string | null;

	@Column('varchar', { name: 'pro', nullable: true, length: 10 })
	pro: string | null;

	@Column('varchar', { name: 'pro_result', nullable: true, length: 10 })
	proResult: string | null;

	@Column('varchar', { name: 'nit', nullable: true, length: 10 })
	nit: string | null;

	@Column('varchar', { name: 'nit_result', nullable: true, length: 10 })
	nitResult: string | null;

	@Column('varchar', { name: 'leu', nullable: true, length: 10 })
	leu: string | null;

	@Column('varchar', { name: 'leu_result', nullable: true, length: 10 })
	leuResult: string | null;

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
