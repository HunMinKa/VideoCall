import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('assessment', { schema: 'hicare' })
export class Assessment {
	@PrimaryGeneratedColumn({ type: 'int', name: 'assess_seq' })
	assessSeq: number;

	@Column('int', { name: 'insung_seq', nullable: true })
	insungSeq: number | null;

	@Column('varchar', { name: 'answer', nullable: true, length: 100 })
	answer: string | null;

	@Column('varchar', { name: 'assess_dt', nullable: true, length: 10 })
	assessDt: string | null;

	@Column('varchar', { name: 'assess_type', nullable: true, length: 10 })
	assessType: string | null;

	@Column('datetime', { name: 'input_utc_dt', nullable: true })
	inputUtcDt: Date | null;
}
