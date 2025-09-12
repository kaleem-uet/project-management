/* eslint-disable prettier/prettier */
import { Comment } from 'src/comment/entities/comment.entity';
import { Company } from 'src/company/entities/company.entity';
import { ProjectMember } from 'src/project-member/project-member.entity';
import { Project } from 'src/project/entities/project.entity';
import { Task } from 'src/task/entities/task.entity';
import { User } from 'src/user/entities/user.entity';
import { DataSourceOptions } from 'typeorm';
import { DataSource } from 'typeorm';
export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  username: 'postgres',
  password: 'admin@123',
  database: 'project-management',
  entities: [Company, User, Project, Task, Comment, ProjectMember],
  synchronize: true,
  migrations: [],
  logging: true, // Enable logging to debug connection issues
  extra: {
    // SSL configuration
    ssl:
      process.env.NODE_ENV === 'production'
        ? { rejectUnauthorized: false }
        : false,
    // Connection pool settings
    max: 10,
    min: 1,
    connectionTimeoutMillis: 10000,
    idleTimeoutMillis: 30000,
    // Query timeout
    query_timeout: 10000,
  },
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
