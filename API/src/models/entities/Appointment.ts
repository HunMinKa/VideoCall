import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { AppointmentParticipant } from './AppointmentParticipant';
import { VideoConsultationMaster } from './VideoConsultationMaster';
import { Patient } from './Patient';
import { Doctor } from './Doctor';

@Entity('appointment', { schema: 'hicare' })
export class Appointment {
	@PrimaryGeneratedColumn({ type: 'int', name: 'appoint_seq' })
	appointSeq: number;

	@Column('varchar', { name: 'appoint_dt', nullable: true, length: 10 })
	appointDt: string | null;

	@Column('varchar', { name: 'start_time', nullable: true, length: 5 })
	startTime: string | null;

	@Column('varchar', { name: 'end_time', nullable: true, length: 5 })
	endTime: string | null;

	@Column('varchar', { name: 'title', nullable: true, length: 200 })
	title: string | null;

	@Column('varchar', { name: 'agenda', nullable: true, length: 2000 })
	agenda: string | null;

	@Column('varchar', { name: 'reminder_email', nullable: true, length: 5 })
	reminderEmail: string | null;

	@Column('varchar', { name: 'reminder_sms', nullable: true, length: 5 })
	reminderSms: string | null;

	@Column('datetime', { name: 'input_utc_dt', nullable: true })
	inputUtcDt: Date | null;

	@Column('int', { name: 'doctor_seq', nullable: true })
	doctorSeq: number | null;

	@Column('int', { name: 'insung_seq', nullable: true })
	insungSeq: number | null;

	@Column('datetime', { name: 'appoint_utc_dt', nullable: true })
	appointUtcDt: Date | null;

	@Column('int', { name: 'timezone_offset', nullable: true })
	timezoneOffset: number | null;

	@Column('char', { name: 'confirm_yn', nullable: true, length: 1 })
	confirmYn: string | null;

	@Column('varchar', { name: 'confirm_flag', nullable: true, length: 45 })
	confirmFlag: string | null;

	appointmentParticipant!: AppointmentParticipant;
	videoConsultationMaster!: VideoConsultationMaster;
	patient!: Patient;
	doctor!: Doctor;
}
