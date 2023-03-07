import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { MinLength, IsNotEmpty, MaxLength } from "class-validator";

@Entity()
export class New {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	@MinLength(3)
	@MaxLength(33)
	@IsNotEmpty()
	title: string;

	@Column()
	@IsNotEmpty()
	@MinLength(150)
	description: string;

	@Column()
	@MinLength(3)
	@IsNotEmpty()
	content: string;
	
	@IsNotEmpty()
	@Column({ type: 'longtext' })
	imageUrl: string;

	@Column()
	@IsNotEmpty()
	date: string;
}
