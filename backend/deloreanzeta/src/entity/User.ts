import { Entity, PrimaryGeneratedColumn, Unique, CreateDateColumn, UpdateDateColumn, Column } from "typeorm"
import { MinLength, IsNotEmpty, IsEmail } from "class-validator";

@Entity()
@Unique(["username"])
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    @MinLength(6)
    username: string;

    @Column()
    @MinLength(6)
    password: string;
    
    @Column()
    @IsNotEmpty()
    role: string;

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updateAt: Date;

}
