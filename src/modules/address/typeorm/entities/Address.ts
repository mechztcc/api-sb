import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('addresses')
export class Address {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  zip_code: string;
  
  @Column()
  street: string;
  
  @Column()
  number: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
