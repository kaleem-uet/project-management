import { Comment } from 'src/comment/entities/comment.entity';
import { Company } from 'src/company/entities/company.entity';
import { Project } from 'src/project/entities/project.entity';
import { Task } from 'src/task/entities/task.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: 'Employee' })
  role: 'Admin' | 'Manager' | 'Employee';

  // Relations
  @ManyToOne(() => Company, (company) => company.users)
  company: Company;

  @ManyToMany(() => Project, (project) => project.members)
  @JoinTable({ name: 'project_members' }) // join table
  projects: Project[];

  @OneToMany(() => Task, (task) => task.assignee)
  assignedTasks: Task[];

  @OneToMany(() => Comment, (comment) => comment.author)
  comments: Comment[];
}
