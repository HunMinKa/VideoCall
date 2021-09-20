import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('video_consultation_archives', { schema: 'hicare' })
export class VideoConsultationArchives {
	@PrimaryGeneratedColumn({ type: 'int', name: 'seq' })
	seq: number;

	@Column('varchar', { name: 'id', length: 100 })
	id: string;

	@Column('int', { name: 'create_at', nullable: true })
	createAt: number | null;

	@Column('int', { name: 'duration', nullable: true })
	duration: number | null;

	@Column('int', { name: 'call_seq', nullable: true })
	callSeq: number | null;

	@Column('varchar', { name: 'resolution', nullable: true, length: 20 })
	resolution: string | null;

	@Column('varchar', { name: 'session_id', nullable: true, length: 100 })
	sessionId: string | null;

	@Column('int', { name: 'size', nullable: true })
	size: number | null;

	@Column('datetime', { name: 'input_utc_dt', nullable: true })
	inputUtcDt: Date | null;

	@Column('int', { name: 'doctor_seq', nullable: true })
	doctorSeq: number | null;
}
