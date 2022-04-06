import { Sale } from '@modules/sale/typeorm/entities/Sale';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
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
  description: string;

  @Column()
  actived: boolean;

  @ManyToOne((type) => User, (user) => user.foodstore, { onDelete: 'CASCADE' })
  user: User;

  // @OneToMany(() => Sale, (sale) => sale)
  // sales: Sale[];

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
