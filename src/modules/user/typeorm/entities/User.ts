
import {
  Column,
  CreateDateColumn,
  Entity, OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { FoodStore } from '../../../../modules/foodstore/typeorm/entities/FoodStore';

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

<<<<<<< HEAD
  @Column()
  active: boolean;

  @OneToMany((type) => FoodStore, (foodstore) => foodstore.user)
=======
  @OneToMany((type) => FoodStore, (foodstore) => foodstore.user, { onDelete: 'CASCADE' })
>>>>>>> feature/product-category
  foodstore: FoodStore[];


  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
