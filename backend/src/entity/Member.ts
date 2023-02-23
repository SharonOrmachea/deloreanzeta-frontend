import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { MinLength, MaxLength, IsNotEmpty } from 'class-validator';
@Entity()
export class Member {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	@IsNotEmpty()
	@MinLength(4)
	@MaxLength(15)
	name: string;

	@Column()
	@IsNotEmpty()
	@MinLength(4)
	@MaxLength(20)
	profession: string;

	@Column()
	@IsNotEmpty()
	@MinLength(4)
	@MaxLength(790)
	description: string;

	@Column({ type: 'longtext' })
	@IsNotEmpty()
	imageUrl: string;

}