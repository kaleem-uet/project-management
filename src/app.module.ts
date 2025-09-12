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
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Company, User, Project, Task, Comment, ProjectMember],
      synchronize: true,
      migrations: [],
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
