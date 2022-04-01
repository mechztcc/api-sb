import { FoodStore } from '../../../foodstore/typeorm/entities/FoodStore';
import { Product } from '../../../product/typeorm/entities/Product';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
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

  @ManyToOne((type) => FoodStore, (foodstore) => foodstore.category)
  foodstore: FoodStore;

  @OneToMany((type) => Product, (product) => product.category)
  product: Product[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
