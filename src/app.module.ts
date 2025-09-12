/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from './company/company.module';
import { UserModule } from './user/user.module';
import { ProjectModule } from './project/project.module';
import { TaskModule } from './task/task.module';
import { CommentModule } from './comment/comment.module';
import { ReportsModule } from './reports/reports.module';
import { AuthModule } from './auth/auth.module';
import { ProjectMemberModule } from './project-member/project-member.module';
import { DatabaseModule } from './database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from './company/entities/company.entity';
import { User } from './user/entities/user.entity';
import { Project } from './project/entities/project.entity';
import { Task } from './task/entities/task.entity';
import { Comment } from './comment/entities/comment.entity';
import { ProjectMember } from './project-member/project-member.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import appConfig from './config/app.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local', '.env'],
      load: [appConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        // Get environment variables with proper type conversion
        const host = configService.get<string>('DB_HOST', 'localhost');
        const port = configService.get<number>('DB_PORT', 5432);
        const username = configService.get<string>('DB_USERNAME', 'postgres');
        const password = configService.get<string>('DB_PASSWORD', '');
        const database = configService.get<string>(
          'DB_NAME',
          'project_management',
        );
        const nodeEnv = configService.get<string>('NODE_ENV', 'development');

        // Debug logging (remove in production)
        console.log('Database Configuration:');
        console.log(`Host: ${host}`);
        console.log(`Port: ${port}`);
        console.log(`Username: ${username}`);
        console.log(`Database: ${database}`);
        console.log(`Password length: ${password.length}`);
        console.log(`Environment: ${nodeEnv}`);

        return {
          type: 'postgres',
          host,
          port,
          username,
          password: String(password), // Ensure it's always a string
          database,
          entities: [Company, User, Project, Task, Comment, ProjectMember],
          synchronize: nodeEnv !== 'production', // Only sync in development
          migrations: [],
          logging: nodeEnv === 'development' ? ['error', 'warn'] : false,
          extra: {
            // SSL configuration
            ssl:
              nodeEnv === 'production' ? { rejectUnauthorized: false } : false,
            // Connection pool settings
            max: 10,
            min: 1,
            connectionTimeoutMillis: 10000,
            idleTimeoutMillis: 30000,
            // Query timeout
            query_timeout: 10000,
          },
          retryAttempts: 5,
          retryDelay: 3000,
          // Additional options for SASL authentication
          options: {
            encrypt: false, // Disable encryption for local development
            trustServerCertificate: true,
          },
        };
      },
      inject: [ConfigService],
    }),
    CompanyModule,
    UserModule,
    ProjectModule,
    TaskModule,
    CommentModule,
    ReportsModule,
    AuthModule,
    ProjectMemberModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
