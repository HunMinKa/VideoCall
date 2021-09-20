import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Patient } from './Patient';
import { VideoConsultationHistory } from './VideoConsultationHistory';
@Entity('video_consultation_master', { schema: 'hicare' })
export class VideoConsultationMaster {
	@PrimaryGeneratedColumn({ type: 'int', name: 'call_seq' })
	callSeq: number;

	@Column('int', { name: 'doctor_seq', nullable: true })
	doctorSeq: number | null;

	@Column('int', { name: 'insung_seq', nullable: true })
	insungSeq: number | null;

	@Column('varchar', { name: 'session_id', nullable: true, length: 200 })
	sessionId: string | null;

	@Column('int', { name: 'appoint_seq', nullable: true })
	appointSeq: number | null;

	@Column('varchar', { name: 'call_type', nullable: true, length: 10 })
	callType: string | null;

	@Column('datetime', { name: 'input_utc_dt', nullable: true })
	inputUtcDt: Date | null;

	@Column('varchar', { name: 'subjective', nullable: true, length: 1000 })
	subjective: string | null;

	@Column('varchar', { name: 'objective', nullable: true, length: 1000 })
	objective: string | null;

	@Column('varchar', { name: 'assessment', nullable: true, length: 1000 })
	assessment: string | null;

	@Column('varchar', { name: 'plans', nullable: true, length: 1000 })
	plans: string | null;

	@Column('datetime', { name: 'note_utc_dt', nullable: true })
	noteUtcDt: Date | null;

	patient!: Patient;
}
