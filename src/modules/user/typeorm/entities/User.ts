
import { FoodStore } from '../../../../modules/foodstore/typeorm/entities/FoodStore';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Category } from '@modules/category/typeorm/entities/Category';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany((type) => FoodStore, (foodstore) => foodstore.user, { onDelete: 'CASCADE' })
  foodstore: FoodStore[];


  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
