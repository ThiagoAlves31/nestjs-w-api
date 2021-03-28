import {
    BaseEntity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    Entity,
    Timestamp,
} from 'typeorm';

@Entity()
export class ArtificialHot extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: string;

    @Column({ nullable: false, type: 'varchar', length: 500 })
    title: string;

    @Column({ nullable: false, type: 'varchar', length: 200 })
    author: string;

    @Column()
    ups: number;

    @Column()
    num_comments: number;

    @CreateDateColumn()
    createdAt: Date;
}