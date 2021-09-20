import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('measure_asma', { schema: 'hicare' })
export class MeasureAsma {
	@PrimaryGeneratedColumn({ type: 'int', name: 'seq' })
	seq: number;

	@Column('int', { name: 'insung_seq', nullable: true })
	insungSeq: number | null;

	@Column('float', { name: 'best_pef', nullable: true, precision: 12 })
	bestPef: number | null;

	@Column('float', { name: 'best_fev1', nullable: true, precision: 12 })
	bestFev1: number | null;

	@Column('varchar', { name: 'pef_personal_best', nullable: true, length: 10 })
	pefPersonalBest: string | null;

	@Column('varchar', { name: 'fev1_personal_best', nullable: true, length: 10 })
	fev1PersonalBest: string | null;

	@Column('float', { name: 'best_pef_p', nullable: true, precision: 12 })
	bestPefP: number | null;

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

	@Column('char', { name: 'bad_test_best_pef', nullable: true, length: 1 })
	badTestBestPef: string | null;

	@Column('char', { name: 'bad_test_best_fev1', nullable: true, length: 1 })
	badTestBestFev1: string | null;

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
