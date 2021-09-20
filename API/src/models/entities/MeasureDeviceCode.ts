import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('measure_device_code', { schema: 'hicare' })
export class MeasureDeviceCode {
	@PrimaryGeneratedColumn({ type: 'int', name: 'seq' })
	seq: number;

	@Column('varchar', { name: 'device_code', nullable: true, length: 50 })
	deviceCode: string | null;

	@Column('varchar', { name: 'measure_type', nullable: true, length: 50 })
	measureType: string | null;

	@Column('varchar', { name: 'device_name', nullable: true, length: 50 })
	deviceName: string | null;

	@Column('varchar', { name: 'device_name_kor', nullable: true, length: 50 })
	deviceNameKor: string | null;

	@Column('varchar', { name: 'model_name', nullable: true, length: 50 })
	modelName: string | null;

	@Column('varchar', { name: 'manufacturer', nullable: true, length: 50 })
	manufacturer: string | null;

	@Column('varchar', { name: 'connectivity', nullable: true, length: 10 })
	connectivity: string | null;

	@Column('datetime', { name: 'input_utc_dt', nullable: true })
	inputUtcDt: Date | null;
}
