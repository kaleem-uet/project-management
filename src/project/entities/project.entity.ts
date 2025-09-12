import { Comment } from 'src/comment/entities/comment.entity';
import { Company } from 'src/company/entities/company.entity';
import { Task } from 'src/task/entities/task.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  ManyToMany,
} from 'typeorm';

@Entity('projects')
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  // Relations
  @ManyToOne(() => Company, (company) => company.projects)
  company: Company;

  @ManyToOne(() => User, (user) => user.projects)
  creator: User;

  @ManyToMany(() => User, (user) => user.projects)
  members: User[];

  @OneToMany(() => Task, (task) => task.project)
  tasks: Task[];

  @OneToMany(() => Comment, (comment) => comment.project)
  comments: Comment[];
}
