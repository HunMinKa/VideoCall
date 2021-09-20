import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('video_consultation_status', { schema: 'hicare' })
export class VideoConsultationStatus {
	@PrimaryGeneratedColumn({ type: 'int', name: 'seq' })
	seq: number;

	@Column('int', { name: 'push_seq' })
	pushSeq: number;

	@Column('int', { name: 'call_seq' })
	callSeq: number;

	@Column('char', { name: 'flag', nullable: true, length: 1 })
	flag: string | null;

	@Column('datetime', { name: 'input_utc_dt', nullable: true })
	inputUtcDt: Date | null;

	@Column('datetime', { name: 'accept_utc_dt', nullable: true })
	acceptUtcDt: Date | null;

	@Column('datetime', { name: 'end_utc_dt', nullable: true })
	endUtcDt: Date | null;

	@Column('int', { name: 'insung_seq', nullable: true })
	insungSeq: number | null;

	@Column('datetime', { name: 'start_utc_dt', nullable: true })
	startUtcDt: Date | null;
}
