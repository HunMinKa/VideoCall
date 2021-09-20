import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('video_consultation_history', { schema: 'hicare' })
export class VideoConsultationHistory {
	@PrimaryGeneratedColumn({ type: 'int', name: 'seq' })
	seq: number;

	@Column('int', { name: 'insung_seq', nullable: true })
	insungSeq: number | null;

	@Column('datetime', { name: 'end_utc_dt', nullable: true })
	endUtcDt: Date | null;

	@Column('varchar', { name: 'caller_telnum', nullable: true, length: 200 })
	callerTelnum: string | null;

	@Column('datetime', { name: 'start_utc_dt', nullable: true })
	startUtcDt: Date | null;

	@Column('datetime', { name: 'accept_utc_dt', nullable: true })
	acceptUtcDt: Date | null;

	@Column('varchar', { name: 'callee_telnum', nullable: true, length: 200 })
	calleeTelnum: string | null;

	@Column('int', { name: 'doctor_seq', nullable: true })
	doctorSeq: number | null;

	@Column('varchar', { name: 'call_type', nullable: true, length: 10 })
	callType: string | null;

	@Column('varchar', { name: 'session_id', nullable: true, length: 200 })
	sessionId: string | null;

	@Column('int', { name: 'appoint_seq', nullable: true })
	appointSeq: number | null;

	@Column('int', { name: 'call_seq', nullable: true })
	callSeq: number | null;

	@Column('char', { name: 'call_check', nullable: true, length: 1 })
	callCheck: string | null;

	@Column('char', { name: 'flag', nullable: true, length: 1 })
	flag: string | null;
}
