import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Operation } from './operation.entity';
import { User } from './user.entity';

@Entity()
export class Record {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Operation, operation => operation.records)
  @JoinColumn({ name: 'operation_id' })
  operation: Operation;

  @ManyToOne(() => User, user => user.records)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  amount: number;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  user_balance: number;

  @Column()
  operation_response: string;

  @Column()
  date: Date;
}
