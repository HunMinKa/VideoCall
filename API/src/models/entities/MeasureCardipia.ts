import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('measure_cardipia', { schema: 'hicare' })
export class MeasureCardipia {
	@PrimaryGeneratedColumn({ type: 'int', name: 'seq' })
	seq: number;

	@Column('int', { name: 'insung_seq', nullable: true })
	insungSeq: number | null;

	@Column('text', { name: 'lead1', nullable: true })
	lead1: string | null;

	@Column('text', { name: 'lead2', nullable: true })
	lead2: string | null;

	@Column('text', { name: 'lead3', nullable: true })
	lead3: string | null;

	@Column('text', { name: 'v1', nullable: true })
	v1: string | null;

	@Column('text', { name: 'v2', nullable: true })
	v2: string | null;

	@Column('text', { name: 'v3', nullable: true })
	v3: string | null;

	@Column('text', { name: 'v4', nullable: true })
	v4: string | null;

	@Column('text', { name: 'v5', nullable: true })
	v5: string | null;

	@Column('text', { name: 'v6', nullable: true })
	v6: string | null;

	@Column('varchar', { name: 'hr', nullable: true, length: 10 })
	hr: string | null;

	@Column('varchar', { name: 'pr', nullable: true, length: 10 })
	pr: string | null;

	@Column('varchar', { name: 'qrs', nullable: true, length: 10 })
	qrs: string | null;

	@Column('varchar', { name: 'qt', nullable: true, length: 10 })
	qt: string | null;

	@Column('varchar', { name: 'rr', nullable: true, length: 10 })
	rr: string | null;

	@Column('varchar', { name: 'qtc', nullable: true, length: 10 })
	qtc: string | null;

	@Column('varchar', { name: 'p_qrs_t_qrst', nullable: true, length: 10 })
	pQrsTQrst: string | null;

	@Column('varchar', { name: 'qtr', nullable: true, length: 10 })
	qtr: string | null;

	@Column('varchar', { name: 'rv5', nullable: true, length: 10 })
	rv5: string | null;

	@Column('varchar', { name: 'sv1', nullable: true, length: 10 })
	sv1: string | null;

	@Column('varchar', { name: 'pa', nullable: true, length: 1000 })
	pa: string | null;

	@Column('varchar', { name: 'pa_', nullable: true, length: 1000 })
	pa_: string | null;

	@Column('varchar', { name: 'qa', nullable: true, length: 1000 })
	qa: string | null;

	@Column('varchar', { name: 'ra', nullable: true, length: 1000 })
	ra: string | null;

	@Column('varchar', { name: 'ra_', nullable: true, length: 1000 })
	ra_: string | null;

	@Column('varchar', { name: 'sa', nullable: true, length: 1000 })
	sa: string | null;

	@Column('varchar', { name: 'ta', nullable: true, length: 1000 })
	ta: string | null;

	@Column('varchar', { name: 'pd', nullable: true, length: 1000 })
	pd: string | null;

	@Column('varchar', { name: 'qd', nullable: true, length: 1000 })
	qd: string | null;

	@Column('varchar', { name: 'rd', nullable: true, length: 1000 })
	rd: string | null;

	@Column('varchar', { name: 'rd_', nullable: true, length: 1000 })
	rd_: string | null;

	@Column('varchar', { name: 'sd', nullable: true, length: 1000 })
	sd_: string | null;

	@Column('varchar', { name: 'pr_', nullable: true, length: 1000 })
	pr_: string | null;

	@Column('varchar', { name: 'qt_', nullable: true, length: 1000 })
	qt_: string | null;

	@Column('varchar', { name: 'tf', nullable: true, length: 1000 })
	tf: string | null;

	@Column('varchar', { name: 'st', nullable: true, length: 1000 })
	st: string | null;

	@Column('varchar', { name: 'sts', nullable: true, length: 1000 })
	sts: string | null;

	@Column('varchar', { name: 'summary', nullable: true, length: 2000 })
	summary: string | null;

	@Column('varchar', { name: 'resolution', nullable: true, length: 200 })
	resolution: string | null;

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
