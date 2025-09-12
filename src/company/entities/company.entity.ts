import { Project } from 'src/project/entities/project.entity';
import { User } from 'src/user/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('companies')
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ nullable: true })
  domain: string;

  // Relations
  @OneToMany(() => User, (user) => user.company)
  users: User[];

  @OneToMany(() => Project, (project) => project.company)
  projects: Project[];
}
