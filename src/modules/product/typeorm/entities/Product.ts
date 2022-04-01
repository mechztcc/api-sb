import { Category } from '../../../category/typeorm/entities/Category';
import {
    Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  price: string;

  @ManyToOne((type) => Category, (category) => category.product, { onDelete: 'CASCADE' })
  category: Category;

  @Column()
  size: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
