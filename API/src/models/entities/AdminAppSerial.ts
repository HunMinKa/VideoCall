import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('admin_app_serial', { schema: 'hicare' })
export class AdminAppSerial {
	@PrimaryGeneratedColumn({ type: 'int', name: 'seq' })
	seq: number;

	@Column('varchar', { name: 'serial_number', nullable: true, length: 50 })
	serialNumber: string | null;

	@Column('int', { name: 'admin_seq', nullable: true })
	adminSeq: number | null;

	@Column('char', { name: 'download_yn', nullable: true, length: 1 })
	downloadYn: string | null;

	@Column('datetime', { name: 'input_utc_dt', nullable: true })
	inputUtcDt: Date | null;
}
