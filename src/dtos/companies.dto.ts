import { IsNumber, IsString } from 'class-validator';

export class CreateCompaniesDto {
  @IsString()
  public name: string;

  @IsString()
  public company_type: string;

  @IsNumber()
  public founded_at: number;
}
