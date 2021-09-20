import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('measure_ecg', { schema: 'hicare' })
export class MeasureEcg {
	@PrimaryGeneratedColumn({ type: 'int', name: 'seq' })
	seq: number;

	@Column('int', { name: 'insung_seq', nullable: true })
	insungSeq: number | null;

	@Column('longtext', { name: 'lead1', nullable: true })
	lead1: string | null;

	@Column('longtext', { name: 'lead2', nullable: true })
	lead2: string | null;

	@Column('longtext', { name: 'lead3', nullable: true })
	lead3: string | null;

	@Column('longtext', { name: 'v1', nullable: true })
	v1: string | null;

	@Column('longtext', { name: 'v2', nullable: true })
	v2: string | null;

	@Column('longtext', { name: 'v3', nullable: true })
	v3: string | null;

	@Column('longtext', { name: 'v4', nullable: true })
	v4: string | null;

	@Column('longtext', { name: 'v5', nullable: true })
	v5: string | null;

	@Column('longtext', { name: 'v6', nullable: true })
	v6: string | null;

	@Column('longtext', { name: 'pace_pulse', nullable: true })
	pacePulse: string | null;

	@Column('varchar', { name: 'diag_code', nullable: true, length: 500 })
	diagCode: string | null;

	@Column('varchar', { name: 'p_axis', nullable: true, length: 10 })
	pAxis: string | null;

	@Column('varchar', { name: 'pp_interval', nullable: true, length: 10 })
	ppInterval: string | null;

	@Column('varchar', { name: 'pr_interval', nullable: true, length: 10 })
	prInterval: string | null;

	@Column('varchar', { name: 'qrs', nullable: true, length: 10 })
	qrs: string | null;

	@Column('varchar', { name: 'qt', nullable: true, length: 10 })
	qt: string | null;

	@Column('varchar', { name: 'qtc', nullable: true, length: 10 })
	qtc: string | null;

	@Column('varchar', { name: 'r_axis', nullable: true, length: 10 })
	rAxis: string | null;

	@Column('varchar', { name: 'rr_interval', nullable: true, length: 10 })
	rrInterval: string | null;

	@Column('varchar', { name: 't_axis', nullable: true, length: 10 })
	tAxis: string | null;

	@Column('varchar', { name: 'heart_rate_instant', nullable: true, length: 10 })
	heartRateInstant: string | null;

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
