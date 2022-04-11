import { Product } from '../../../product/typeorm/entities/Product';
import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Customer } from '../../../customer/typeorm/entities/Customer';
import { BagItem } from './BagItem';

@Entity('bags')
export class Bag {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @OneToOne(() => Customer)
  @JoinColumn()
  cutomer: Customer;

  @OneToMany(() => BagItem, (item) => item.bag)
  items: BagItem[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
