import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Patient } from './Patient';
@Entity('message', { schema: 'hicare' })
export class Message {
	@PrimaryGeneratedColumn({ type: 'int', name: 'message_seq' })
	messageSeq: number;

	@Column('int', { name: 'insung_seq', nullable: true })
	insungSeq: number | null;

	@Column('varchar', { name: 'message', nullable: true, length: 2000 })
	message: string | null;

	@Column('char', { name: 'check_YN', nullable: true, length: 1 })
	checkYn: string | null;

	@Column('datetime', { name: 'input_utc_dt', nullable: true })
	inputUtcDt: Date | null;

	@Column('int', { name: 'doctor_seq', nullable: true })
	doctorSeq: number | null;

	@Column('char', { name: 'sender_flag', nullable: true, length: 1 })
	senderFlag: string | null;

	patient!: Patient;
}
