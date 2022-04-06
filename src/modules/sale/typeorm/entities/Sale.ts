import { Customer } from '../../../customer/typeorm/entities/Customer';
import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { Address } from '../../../address/typeorm/entities/Address';
import { FoodStore } from '../../../foodstore/typeorm/entities/FoodStore';
import { SaleProduct } from './SaleProduct';

@Entity('sale')
export class Sale {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @OneToOne(() => Customer)
  @JoinColumn()
  customer: Customer;

  @OneToOne(() => FoodStore)
  @JoinColumn()
  foodstore: FoodStore;

  @OneToOne(() => Address)
  @JoinColumn()
  delivery: Address;

  @OneToMany(() => SaleProduct, (prod) => prod.sale)
  sales: SaleProduct[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
