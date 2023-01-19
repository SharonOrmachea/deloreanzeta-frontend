import { Entity, PrimaryGeneratedColumn, Unique, Column, ManyToOne} from "typeorm"
import { MinLength, IsNotEmpty, IsOptional } from "class-validator";
import { Product } from "./Product";

@Entity()
@Unique(["route"])
export class Image {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    //@MinLength(3)
    @IsNotEmpty()
    route: string;

    @ManyToOne(() => Product, (product) => product.image)
    product: Product;

}