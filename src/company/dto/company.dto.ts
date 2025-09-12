import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CompanyDto {
  @IsNotEmpty({ message: 'Company name cannot be empty' })
  @IsString({ message: 'Company name must be a string' })
  name: string;

  @IsOptional()
  @IsString({ message: 'Domain must be a string' })
  domain: string;
}
