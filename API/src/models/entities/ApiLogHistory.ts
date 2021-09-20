import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('api_log_history', { schema: 'hicare' })
export class ApiLogHistory {
	@PrimaryGeneratedColumn({ type: 'int', name: 'seq' })
	seq: number;

	@Column('datetime', { name: 'request_date', nullable: true })
	requestDate: Date | null;

	@Column('varchar', { name: 'request_header', nullable: true, length: 4000 })
	requestHeader: string | null;

	@Column('varchar', { name: 'request_key', nullable: true, length: 100 })
	requestKey: string | null;

	@Column('text', { name: 'request_body', nullable: true })
	requestBody: string | null;

	@Column('datetime', { name: 'response_date', nullable: true })
	responseDate: Date | null;

	@Column('varchar', { name: 'response_header', nullable: true, length: 4000 })
	responseHeader: string | null;

	@Column('varchar', { name: 'response_key', nullable: true, length: 100 })
	responseKey: string | null;

	@Column('text', { name: 'response_body', nullable: true })
	responseBody: string | null;

	@Column('datetime', { name: 'input_utc_dt', nullable: true })
	inputUtcDt: Date | null;

	@Column('int', { name: 'measure_seq', nullable: true })
	measureSeq: number | null;

	@Column('varchar', { name: 'measure_table', nullable: true, length: 50 })
	measureTable: string | null;
}
