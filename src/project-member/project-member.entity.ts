/* eslint-disable prettier/prettier */
import { Project } from 'src/project/entities/project.entity';
import { User } from 'src/user/entities/user.entity';
import { Entity, PrimaryColumn, ManyToOne } from 'typeorm';

@Entity('project_members')
export class ProjectMember {
  @PrimaryColumn()
  userId: number;

  @PrimaryColumn()
  projectId: number;

  @ManyToOne(() => User, (user) => user.projects)
  user: User;

  @ManyToOne(() => Project, (project) => project.members)
  project: Project;
}
