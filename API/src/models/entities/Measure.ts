import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('measure', { schema: 'hicare' })
export class Measure {
	@PrimaryGeneratedColumn({ type: 'int', name: 'seq' })
	seq: number;

	@Column('int', { name: 'insung_seq', nullable: true })
	insungSeq: number | null;

	@Column('varchar', { name: 'measure_type', nullable: true, length: 10 })
	measureType: string | null;

	@Column('varchar', { name: 'measure_value', nullable: true, length: 50 })
	measureValue: string | null;

	@Column('varchar', { name: 'measure_unit', nullable: true, length: 50 })
	measureUnit: string | null;

	@Column('varchar', { name: 'measure_date', nullable: true, length: 14 })
	measureDate: string | null;

	@Column('datetime', { name: 'input_utc_dt', nullable: true })
	inputUtcDt: Date | null;

	@Column('varchar', { name: 'measure_etc', nullable: true, length: 100 })
	measureEtc: string | null;

	@Column('varchar', { name: 'measure_device', nullable: true, length: 50 })
	measureDevice: string | null;

	@Column('varchar', {
		name: 'irregular_heartbeat',
		nullable: true,
		length: 10,
	})
	irregularHeartbeat: string | null;

	@Column('varchar', { name: 'device_id', nullable: true, length: 50 })
	deviceId: string | null;

	@Column('datetime', { name: 'measure_utc_dt', nullable: true })
	measureUtcDt: Date | null;

	@Column('int', { name: 'timezone_offset', nullable: true })
	timezoneOffset: number | null;

	@Column('varchar', { name: 'auto_timezone', nullable: true, length: 1 })
	autoTimezone: string | null;

	@Column('char', { name: 'direct_input_yn', nullable: true, length: 1 })
	directInputYn: string | null;

	@Column('varchar', { name: 'device_code', nullable: true, length: 50 })
	deviceCode: string | null;
}
