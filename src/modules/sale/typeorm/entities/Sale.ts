import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn, ManyToOne, OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { Address } from '../../../address/typeorm/entities/Address';
import { Customer } from '../../../customer/typeorm/entities/Customer';
import { FoodStore } from '../../../foodstore/typeorm/entities/FoodStore';

@Entity('sale')
export class Sale {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  notes: String;

  @OneToOne(() => Customer)
  @JoinColumn()
  customer: Customer;

  @ManyToOne(() => FoodStore, (foodstore) => foodstore)
  foodstore: FoodStore;

  @OneToOne(() => Address)
  @JoinColumn()
  delivery: Address;

  // @OneToMany(() => SaleProduct, (prod) => prod.sale)
  // sales: SaleProduct[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
