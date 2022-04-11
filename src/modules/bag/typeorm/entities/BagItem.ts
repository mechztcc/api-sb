import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Bag } from './Bag';

@Entity('bag_item')
export class BagItem {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  price: string;

  @Column()
  size: string;

  @ManyToOne(() => Bag, (bag) => bag)
  @JoinColumn()
  bag: Bag;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
