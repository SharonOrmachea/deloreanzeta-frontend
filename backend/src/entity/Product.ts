import {
	Entity,
	PrimaryGeneratedColumn,
	Unique,
	Column,
	ManyToOne,
	OneToMany,
	Double,
} from 'typeorm';
import { MinLength, IsNotEmpty, IsOptional } from 'class-validator';
import { Category } from './Category';
import { Image } from './Image';

@Entity()
@Unique(['name'])
export class Product {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	@MinLength(3)
	@IsNotEmpty()
	name: string;

	@Column({type: "double"})
	@IsNotEmpty()
	price: Double;
	
	@Column()
	@IsNotEmpty()
	@IsOptional()
	discount: Number;

	@Column({type: "double"})
	@IsNotEmpty()
	finalPrice: Double;

	@Column()
	@MinLength(10)
	@IsNotEmpty()
	description: string;

	@Column()
	@MinLength(20)
	@IsOptional()
	information: string;

	@OneToMany(() => Image, (image) => image.product, {cascade: true})
	imageUrl: Image[];

	@ManyToOne(() => Category, (category) => category.products)
	category: Category;
}
