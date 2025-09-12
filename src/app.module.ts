import { dataSourceOptions } from './db/data-source';
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
import { Comment } from './comment/entities/comment.entity';
import { ConfigModule } from '@nestjs/config';
import appConfig from './config/app.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local', '.env'],
      load: [appConfig],
    }),
    TypeOrmModule.forRoot(dataSourceOptions),
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
