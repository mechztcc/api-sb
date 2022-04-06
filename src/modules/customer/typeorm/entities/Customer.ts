import { Address } from "../../../address/typeorm/entities/Address";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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
    @JoinColumn()
    address: Address

    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
}