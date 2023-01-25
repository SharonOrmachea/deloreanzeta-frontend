import { Entity, PrimaryGeneratedColumn, Unique, Column, ManyToOne, OneToMany} from "typeorm"
import { MinLength, IsNotEmpty, IsOptional } from "class-validator";
import { Category } from "./Category";

@Entity()
@Unique(["name"])
export class Product {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    @MinLength(3)
    @IsNotEmpty()
    name: string;
    
    @Column()
    @MinLength(3)
    @IsNotEmpty()
    price: string;
    
    /*@Column()
    @MinLength(3)
    @IsNotEmpty()
    image: string;
    */
   
    @Column()
    @MinLength(10)
    @IsNotEmpty()
    description: string;
    
    @Column()
    @MinLength(20)
    @IsOptional()
    information: string;

    @Column("simple-array")
    images: string[];

    @ManyToOne(() => Category, category => category.products)
    category: Category;
}