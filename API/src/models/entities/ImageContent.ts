import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('image_content', { schema: 'hicare' })
export class ImageContent {
	@PrimaryGeneratedColumn({ type: 'int', name: 'image_seq' })
	imageSeq: number;

	@Column('int', { name: 'insung_seq' })
	insungSeq: number;

	@Column('longblob', { name: 'image_content', nullable: true })
	imageContent: Buffer | null;

	@Column('varchar', { name: 'file_name', nullable: true, length: 100 })
	fileName: string | null;

	@Column('varchar', { name: 'time_stamp', nullable: true, length: 50 })
	timeStamp: string | null;

	@Column('datetime', { name: 'regist_utc_dt' })
	registUtcDt: Date;
}
