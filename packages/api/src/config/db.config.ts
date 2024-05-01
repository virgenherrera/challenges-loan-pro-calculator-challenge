import { IsInt, IsNotEmpty, IsString, Max, Min } from 'class-validator';

export class DbConfig {
  @IsNotEmpty()
  @IsString()
  username = process.env.DB_USERNAME;

  @IsNotEmpty()
  @IsString()
  password = process.env.DB_PASSWORD;

  @IsNotEmpty()
  @IsString()
  database = process.env.DB_NAME;

  @IsNotEmpty()
  @IsString()
  host = process.env.DB_HOST;

  @IsInt()
  @Min(0)
  @Max(65535)
  readonly port: number = process.env.DB_PORT
    ? Number(process.env.APP_PORT)
    : 5432;
}
