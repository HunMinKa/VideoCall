import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('patient_contact_info', { schema: 'hicare' })
export class PatientContactInfo {
	@PrimaryGeneratedColumn({ type: 'int', name: 'seq' })
	seq: number;

	@Column('varchar', { name: 'contact_title', nullable: true, length: 50 })
	contactTitle: string | null;

	@Column('int', { name: 'insung_seq', nullable: true })
	insungSeq: number | null;

	@Column('varchar', { name: 'contact_telnum', nullable: true, length: 20 })
	contactTelnum: string | null;

	@Column('datetime', { name: 'input_utc_dt', nullable: true })
	inputUtcDt: Date | null;
}
