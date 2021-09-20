import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('measure_copd6', { schema: 'hicare' })
export class MeasureCopd6 {
	@PrimaryGeneratedColumn({ type: 'int', name: 'seq' })
	seq: number;

	@Column('int', { name: 'insung_seq', nullable: true })
	insungSeq: number | null;

	@Column('char', { name: 'gender', nullable: true, length: 1 })
	gender: string | null;

	@Column('int', { name: 'age', nullable: true })
	age: number | null;

	@Column('varchar', { name: 'height', nullable: true, length: 10 })
	height: string | null;

	@Column('varchar', { name: 'regression', nullable: true, length: 10 })
	regression: string | null;

	@Column('varchar', { name: 'weight', nullable: true, length: 10 })
	weight: string | null;

	@Column('varchar', { name: 'accessory_id', nullable: true, length: 50 })
	accessoryId: string | null;

	@Column('varchar', { name: 'tests', nullable: true, length: 10 })
	tests: string | null;

	@Column('varchar', { name: 'good_tests', nullable: true, length: 10 })
	goodTests: string | null;

	@Column('varchar', { name: 'fev1_within', nullable: true, length: 10 })
	fev1Within: string | null;

	@Column('varchar', { name: 'fev6_within', nullable: true, length: 10 })
	fev6Within: string | null;

	@Column('varchar', { name: 'fev1_predicted', nullable: true, length: 10 })
	fev1Predicted: string | null;

	@Column('varchar', { name: 'fev1_best1', nullable: true, length: 10 })
	fev1Best1: string | null;

	@Column('varchar', { name: 'fev1_best2', nullable: true, length: 10 })
	fev1Best2: string | null;

	@Column('varchar', { name: 'fev1_best3', nullable: true, length: 10 })
	fev1Best3: string | null;

	@Column('varchar', { name: 'fev1_measured_best', nullable: true, length: 10 })
	fev1MeasuredBest: string | null;

	@Column('varchar', { name: 'fev1_p_pred', nullable: true, length: 10 })
	fev1PPred: string | null;

	@Column('varchar', { name: 'fev6_predicted', nullable: true, length: 10 })
	fev6Predicted: string | null;

	@Column('varchar', { name: 'fev6_best1', nullable: true, length: 10 })
	fev6Best1: string | null;

	@Column('varchar', { name: 'fev6_best2', nullable: true, length: 10 })
	fev6Best2: string | null;

	@Column('varchar', { name: 'fev6_best3', nullable: true, length: 10 })
	fev6Best3: string | null;

	@Column('varchar', { name: 'fev6_measured_best', nullable: true, length: 10 })
	fev6MeasuredBest: string | null;

	@Column('varchar', { name: 'fev6_p_pred', nullable: true, length: 10 })
	fev6PPred: string | null;

	@Column('varchar', {
		name: 'fev1_fev6_predicted',
		nullable: true,
		length: 10,
	})
	fev1Fev6Predicted: string | null;

	@Column('varchar', { name: 'fev1_fev6_best1', nullable: true, length: 10 })
	fev1Fev6Best1: string | null;

	@Column('varchar', { name: 'fev1_fev6_best2', nullable: true, length: 10 })
	fev1Fev6Best2: string | null;

	@Column('varchar', { name: 'fev1_fev6_best3', nullable: true, length: 10 })
	fev1Fev6Best3: string | null;

	@Column('varchar', {
		name: 'fev1_fev6_measured_best',
		nullable: true,
		length: 10,
	})
	fev1Fev6MeasuredBest: string | null;

	@Column('varchar', { name: 'fev1_fev6_p_pred', nullable: true, length: 10 })
	fev1Fev6PPred: string | null;

	@Column('varchar', { name: 'green_zone', nullable: true, length: 10 })
	greenZone: string | null;

	@Column('varchar', { name: 'yellow_zone', nullable: true, length: 10 })
	yellowZone: string | null;

	@Column('varchar', { name: 'orange_zone', nullable: true, length: 10 })
	orangeZone: string | null;

	@Column('varchar', { name: 'lung_age', nullable: true, length: 10 })
	lungAge: string | null;

	@Column('varchar', { name: 'measure_date', nullable: true, length: 14 })
	measureDate: string | null;

	@Column('int', { name: 'sw_version_number', nullable: true })
	swVersionNumber: number | null;

	@Column('int', { name: 'firmware_number', nullable: true })
	firmwareNumber: number | null;

	@Column('int', { name: 'session_time_updated_flag', nullable: true })
	sessionTimeUpdatedFlag: number | null;

	@Column('varchar', { name: 'device_id', nullable: true, length: 50 })
	deviceId: string | null;

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
