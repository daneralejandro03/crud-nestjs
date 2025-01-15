import { v4 as uuidv4 } from 'uuid';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export type TaskStatus = 'pending' | 'in-progress' | 'done';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({
    type: 'enum',
    enum: ['pending', 'in-progress', 'done'],
    default: 'pending',
  })
  status: TaskStatus;
}
