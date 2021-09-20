import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('keypair', { schema: 'hicare' })
export class Keypair {
	@PrimaryGeneratedColumn({ type: 'int', name: 'seq' })
	seq: number;

	@Column('varchar', { name: 'public_key', nullable: true, length: 1000 })
	publicKey: string | null;

	@Column('varchar', { name: 'private_key', nullable: true, length: 4000 })
	privateKey: string | null;

	@Column('datetime', { name: 'input_utc_dt', nullable: true })
	inputUtcDt: Date | null;

	@Column('varchar', { name: 'salt', nullable: true, length: 100 })
	salt: string | null;

	@Column('varchar', { name: 'pem_key', nullable: true, length: 1000 })
	pemKey: string | null;
}
