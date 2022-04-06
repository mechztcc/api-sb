import { Sale } from '../../../sale/typeorm/entities/Sale';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { Category } from '../../../category/typeorm/entities/Category';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  price: string;

  @ManyToOne((type) => Category, (category) => category.product)
  category: Category;

  // @ManyToOne(() => Sale)
  // sale: Sale;

  @Column()
  size: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
