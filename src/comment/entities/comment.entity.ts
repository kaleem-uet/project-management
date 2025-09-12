import { Project } from 'src/project/entities/project.entity';
import { Task } from 'src/task/entities/task.entity';
import { User } from 'src/user/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('comments')
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  // Relations
  @ManyToOne(() => User, (user) => user.comments)
  author: User;

  @ManyToOne(() => Project, (project) => project.comments, { nullable: true })
  project: Project;

  @ManyToOne(() => Task, (task) => task.comments, { nullable: true })
  task: Task;
}
