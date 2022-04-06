import { Address } from "@modules/address/typeorm/entities/Address";
import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('customers')
export class Customer {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    phone: number;

    @Column()
    email: String;

    @Column()
    password: String;

    @OneToOne(() => Address)
    address: Address

    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
}