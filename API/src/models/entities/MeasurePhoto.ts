import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('measure_photo', { schema: 'hicare' })
export class MeasurePhoto {
	@PrimaryGeneratedColumn({ type: 'int', name: 'seq' })
	seq: number;

	@Column('int', { name: 'insung_seq', nullable: true })
	insungSeq: number | null;

	@Column('varchar', { name: 'file_name', nullable: true, length: 50 })
	fileName: string | null;

	@Column('varchar', { name: 'measure_date', nullable: true, length: 14 })
	measureDate: string | null;

	@Column('datetime', { name: 'input_utc_dt', nullable: true })
	inputUtcDt: Date | null;

	@Column('varchar', { name: 'measure_device', nullable: true, length: 50 })
	measureDevice: string | null;

	@Column('varchar', { name: 'device_id', nullable: true, length: 50 })
	deviceId: string | null;

	@Column('datetime', { name: 'measure_utc_dt', nullable: true })
	measureUtcDt: Date | null;

	@Column('int', { name: 'timezone_offset', nullable: true })
	timezoneOffset: number | null;

	@Column('varchar', { name: 'auto_timezone', nullable: true, length: 1 })
	autoTimezone: string | null;

	@Column('varchar', { name: 'contents', nullable: true, length: 50 })
	contents: string | null;

	@Column('varchar', { name: 'thumbnail', nullable: true, length: 50 })
	thumbnail: string | null;

	@Column('varchar', { name: 'resolution', nullable: true, length: 20 })
	resolution: string | null;

	@Column('int', { name: 'size', nullable: true })
	size: number | null;

	@Column('varchar', { name: 'app_version', nullable: true, length: 10 })
	appVersion: string | null;

	@Column('varchar', { name: 'device_code', nullable: true, length: 50 })
	deviceCode: string | null;
}
