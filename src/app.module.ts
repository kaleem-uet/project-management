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

@Module({
  imports: [CompanyModule, UserModule, ProjectModule, TaskModule, CommentModule, ReportsModule, AuthModule, ProjectMemberModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
