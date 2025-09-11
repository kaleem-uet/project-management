import { Module } from '@nestjs/common';
import { ProjectMemberService } from './project-member.service';

@Module({
  providers: [ProjectMemberService]
})
export class ProjectMemberModule {}
