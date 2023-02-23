// imports for creating a new entity
import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
	OneToMany,
	ManyToOne,
	JoinColumn,
} from 'typeorm';
import { Blob } from 'buffer';
import { Product } from './Product';

@Entity()
export class Image extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({type: 'longtext' })
	data: Blob;

	@ManyToOne(() => Product, (product) => product.imageUrl)
	product: Product;

}
