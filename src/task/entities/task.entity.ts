import { Comment } from 'src/comment/entities/comment.entity';
import { Project } from 'src/project/entities/project.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity('tasks')
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column({ default: 'Todo' })
  status: 'Todo' | 'In Progress' | 'Done';

  @Column({ type: 'timestamp', nullable: true })
  deadline: Date;

  // Relations
  @ManyToOne(() => Project, (project) => project.tasks)
  project: Project;

  @ManyToOne(() => User, (user) => user.assignedTasks)
  assignee: User;

  @OneToMany(() => Comment, (comment) => comment.task)
  comments: Comment[];
}
