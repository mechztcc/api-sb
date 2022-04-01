import { FoodStore } from '../../../foodstore/typeorm/entities/FoodStore';
import { Product } from '../../../product/typeorm/entities/Product';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  actived: boolean;

  @ManyToOne((type) => FoodStore, (foodstore) => foodstore.category, { onDelete: 'CASCADE' })
  foodstore: FoodStore;

  @ManyToOne((type) => Product, (product) => product.category, { onDelete: 'CASCADE' })
  product: Product[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
