import { IsNotEmpty, IsString } from 'class-validator';
export class CommentDto {
  @IsNotEmpty({ message: 'Comment cannot be empty' })
  @IsString({ message: 'Comment must be a string' })
  content: string;
}
