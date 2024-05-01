import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Record } from './record.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column()
  status: 'active' | 'inactive';

  @OneToMany(() => Record, record => record.user)
  records: Record[];
}
