import { Category } from '../../../category/typeorm/entities/Category';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Address } from '../../../../modules/address/typeorm/entities/Address';
import { User } from '../../../../modules/user/typeorm/entities/User';

@Entity('foodstores')
export class FoodStore {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  actived: boolean;

  @ManyToOne((type) => User, (user) => user.foodstore, { onDelete: 'CASCADE' })
  user: User;

  // @ManyToOne((type) => Category, (category) => category.foodstore, { onDelete: 'CASCADE' })
  // category: Category[];

  @OneToOne((type) => Address, { onDelete: 'CASCADE' })
  @JoinColumn()
  address: Address;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
