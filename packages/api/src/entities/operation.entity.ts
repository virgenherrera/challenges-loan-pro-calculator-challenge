import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Record } from './record.entity';

@Entity()
export class Operation {
  static enum = ['addition', 'subtraction', 'multiplication', 'division', 'square_root', 'random_string'] as const;

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "enum",
    enum: Operation.enum,
    default: 'addition'
  })
  type: typeof Operation.enum[number];

  @Column({ type: "decimal", precision: 5, scale: 2 })
  cost: number;

  @OneToMany(() => Record, record => record.operation)
  records: Record[];
}
