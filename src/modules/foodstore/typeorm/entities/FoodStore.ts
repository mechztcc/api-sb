import { User } from "src/modules/user/typeorm/entities/User";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('foodstores')
export class FoodStore {

    @PrimaryGeneratedColumn('identity')
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    updated_at: Date;
}