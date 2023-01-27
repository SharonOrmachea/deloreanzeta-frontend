import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Image } from './Image';

@Entity()
export class New {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	title: string;

	@Column()
	description: string;

	@Column()
	content: string;

	@Column()
	image: Image;

	@Column()
	createdAt: Date;
}
