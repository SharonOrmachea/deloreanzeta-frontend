import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { MinLength, IsNotEmpty } from "class-validator";

@Entity()
export class Tour {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	@MinLength(3)
	@IsNotEmpty()
	name: string;

	@Column()
	@MinLength(3)
	@IsNotEmpty()
	date: Date;

	@Column()
	@MinLength(3)
	@IsNotEmpty()
	place: string;

}
