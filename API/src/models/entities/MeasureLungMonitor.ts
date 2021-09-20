import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('measure_lung_monitor', { schema: 'hicare' })
export class MeasureLungMonitor {
	@PrimaryGeneratedColumn({ type: 'int', name: 'seq' })
	seq: number;

	@Column('int', { name: 'insung_seq', nullable: true })
	insungSeq: number | null;

	@Column('varchar', { name: 'best_pef', nullable: true, length: 10 })
	bestPef: string | null;

	@Column('varchar', { name: 'best_fev75', nullable: true, length: 10 })
	bestFev75: string | null;

	@Column('float', { name: 'best_fev1', nullable: true, precision: 12 })
	bestFev1: number | null;

	@Column('varchar', { name: 'best_fev6', nullable: true, length: 10 })
	bestFev6: string | null;

	@Column('varchar', { name: 'best_fev1_fev6', nullable: true, length: 10 })
	bestFev1Fev6: string | null;

	@Column('varchar', { name: 'best_fef2575', nullable: true, length: 10 })
	bestFef2575: string | null;

	@Column('varchar', { name: 'fev1_personal_best', nullable: true, length: 10 })
	fev1PersonalBest: string | null;

	@Column('varchar', { name: 'pef_personal_best', nullable: true, length: 10 })
	pefPersonalBest: string | null;

	@Column('varchar', { name: 'best_pef_p', nullable: true, length: 10 })
	bestPefP: string | null;

	@Column('float', { name: 'best_fev1_p', nullable: true, precision: 12 })
	bestFev1P: number | null;

	@Column('varchar', { name: 'green_zone', nullable: true, length: 10 })
	greenZone: string | null;

	@Column('varchar', { name: 'yellow_zone', nullable: true, length: 10 })
	yellowZone: string | null;

	@Column('varchar', { name: 'orange_zone', nullable: true, length: 10 })
	orangeZone: string | null;

	@Column('varchar', { name: 'measure_date', nullable: true, length: 14 })
	measureDate: string | null;

	@Column('char', { name: 'bad_test_pef', nullable: true, length: 1 })
	badTestPef: string | null;

	@Column('char', { name: 'bad_test_fev75', nullable: true, length: 1 })
	badTestFev75: string | null;

	@Column('char', { name: 'bad_test_fev1', nullable: true, length: 1 })
	badTestFev1: string | null;

	@Column('char', { name: 'bad_test_fev6', nullable: true, length: 1 })
	badTestFev6: string | null;

	@Column('char', { name: 'bad_test_fev2575', nullable: true, length: 1 })
	badTestFev2575: string | null;

	@Column('char', { name: 'good_test', nullable: true, length: 1 })
	goodTest: string | null;

	@Column('int', { name: 'sw_version_number', nullable: true })
	swVersionNumber: number | null;

	@Column('int', { name: 'sw_number', nullable: true })
	swNumber: number | null;

	@Column('int', { name: 'number_blows', nullable: true })
	numberBlows: number | null;

	@Column('int', { name: 'number_good_blows', nullable: true })
	numberGoodBlows: number | null;

	@Column('varchar', { name: 'device_id', nullable: true, length: 50 })
	deviceId: string | null;

	@Column('varchar', { name: 'accessory_id', nullable: true, length: 10 })
	accessoryId: string | null;

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
