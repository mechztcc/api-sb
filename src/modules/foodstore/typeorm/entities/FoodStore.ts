import { Address } from '../../../../modules/address/typeorm/entities/Address';
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
import { User } from '../../../../modules/user/typeorm/entities/User';

@Entity('foodstores')
export class FoodStore {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @ManyToOne((type) => User, (user) => user.foodstore)
  user: User;

  @OneToOne((type) => Address)
  @JoinColumn()
  address: Address;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
