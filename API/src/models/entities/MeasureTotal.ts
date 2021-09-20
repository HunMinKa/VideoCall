import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Patient } from './Patient';

@Index('FK_measure_total_insung_seq_patient_insung_seq', ['insungSeq'], {})
@Entity('measure_total', { schema: 'hicare' })
export class MeasureTotal {
	@PrimaryGeneratedColumn({ type: 'int', name: 'seq' })
	seq: number;

	@Column('int', { name: 'measure_seq', nullable: true })
	measureSeq: number | null;

	@Column('int', { name: 'insung_seq', nullable: true })
	insungSeq: number | null;

	@Column('varchar', { name: 'measure_type', nullable: true, length: 50 })
	measureType: string | null;

	@Column('varchar', { name: 'measure_value1', nullable: true, length: 50 })
	measureValue1: string | null;

	@Column('varchar', { name: 'measure_value2', nullable: true, length: 10 })
	measureValue2: string | null;

	@Column('varchar', { name: 'measure_value3', nullable: true, length: 10 })
	measureValue3: string | null;

	@Column('varchar', { name: 'measure_value4', nullable: true, length: 10 })
	measureValue4: string | null;

	@Column('varchar', { name: 'measure_value5', nullable: true, length: 10 })
	measureValue5: string | null;

	@Column('varchar', { name: 'measure_unit1', nullable: true, length: 10 })
	measureUnit1: string | null;

	@Column('varchar', { name: 'measure_unit2', nullable: true, length: 10 })
	measureUnit2: string | null;

	@Column('varchar', { name: 'measure_unit3', nullable: true, length: 10 })
	measureUnit3: string | null;

	@Column('varchar', { name: 'measure_unit4', nullable: true, length: 10 })
	measureUnit4: string | null;

	@Column('varchar', { name: 'measure_unit5', nullable: true, length: 10 })
	measureUnit5: string | null;

	@Column('varchar', { name: 'measure_device', nullable: true, length: 50 })
	measureDevice: string | null;

	@Column('varchar', { name: 'measure_date', nullable: true, length: 14 })
	measureDate: string | null;

	@Column('datetime', { name: 'measure_utc_dt', nullable: true })
	measureUtcDt: Date | null;

	@Column('datetime', { name: 'input_utc_dt', nullable: true })
	inputUtcDt: Date | null;

	@Column('int', { name: 'timezone_offset', nullable: true })
	timezoneOffset: number | null;

	@Column('char', { name: 'auto_timezone', nullable: true, length: 1 })
	autoTimezone: string | null;

	@Column('longblob', { name: 'thumbnail', nullable: true })
	thumbnail: Buffer | null;

	@Column('varchar', { name: 'resolution', nullable: true, length: 20 })
	resolution: string | null;

	@Column('int', { name: 'size', nullable: true })
	size: number | null;

	@Column('varchar', { name: 'measure_etc', nullable: true, length: 100 })
	measureEtc: string | null;

	@Column('char', { name: 'direct_input_yn', nullable: true, length: 1 })
	directInputYn: string | null;

	@Column('varchar', { name: 'device_code', nullable: true, length: 50 })
	deviceCode: string | null;

	@ManyToOne(() => Patient, (patient) => patient.measureTotals, {
		onDelete: 'RESTRICT',
		onUpdate: 'RESTRICT',
	})
	@JoinColumn([{ name: 'insung_seq', referencedColumnName: 'insungSeq' }])
	insungSeq2: Patient;
}
