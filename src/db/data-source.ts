/* eslint-disable prettier/prettier */
import { DataSourceOptions, DataSource } from 'typeorm';
import { Company } from 'src/company/entities/company.entity';
import { User } from 'src/user/entities/user.entity';
import { Project } from 'src/project/entities/project.entity';
import { Task } from 'src/task/entities/task.entity';
import { Comment } from 'src/comment/entities/comment.entity';
import { ProjectMember } from 'src/project-member/project-member.entity';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  username: 'postgres',
  password: process.env.DB_PASSWORD || 'admin@123',
  database: 'project-management',
  entities: [Company, User, Project, Task, Comment, ProjectMember],
  synchronize: process.env.NODE_ENV !== 'production',
  migrations: [__dirname + '/migrations/*.ts'], // Path for migrations
  migrationsTableName: 'custom_migrations', // Custom migrations table name
  logging: true, // Enable logging to debug connection issues
  extra: {
    ssl:
      process.env.NODE_ENV === 'production'
        ? { rejectUnauthorized: false }
        : false,
    max: 10,
    min: 1,
    connectionTimeoutMillis: 10000,
    idleTimeoutMillis: 30000,
    query_timeout: 10000,
  },
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
