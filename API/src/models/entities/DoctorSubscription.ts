import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { Doctor } from './Doctor';

@Entity('doctor_subscription', { schema: 'hicare' })
export class DoctorSubscription {
	@Column('int', { primary: true, name: 'doctor_seq' })
	doctorSeq: number;

	@Column('varchar', { name: 'push_endpoint', nullable: true, length: 300 })
	pushEndpoint: string | null;

	@Column('varchar', { name: 'push_p256dh', nullable: true, length: 100 })
	pushP256dh: string | null;

	@Column('varchar', { name: 'push_auth', nullable: true, length: 50 })
	pushAuth: string | null;

	@Column('datetime', { name: 'input_utc_dt', nullable: true })
	inputUtcDt: Date | null;

	@OneToOne(() => Doctor, (doctor) => doctor.doctorSubscription, {
		onDelete: 'RESTRICT',
		onUpdate: 'RESTRICT',
	})
	@JoinColumn([{ name: 'doctor_seq', referencedColumnName: 'doctorSeq' }])
	doctorSeq2: Doctor;
}
