import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Sale } from './Sale';

@Entity('sale_product')
export class SaleProduct {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  notes: String;

  @Column()
  price: String;

  @Column()
  size: String;

  @Column()
  quantity: number;

  @ManyToOne(() => Sale)
  sale: Sale;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
