import { ApiProperty } from "@nestjs/swagger";
import { Exclude, Transform } from "class-transformer";
import { IsDefined, IsEmail, IsIn, IsOptional, MinLength } from "class-validator";

import { User } from "../../entities";
import { hashString } from "../../utils";

export class RegisterDto implements Pick<User, 'email' | 'password' | 'status'> {
  static AllowedStatuses = ['active', 'inactive'] as const;
  static DefaultStatus: typeof RegisterDto.AllowedStatuses[number] = 'active';

  @ApiProperty()
  @IsDefined()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsDefined()
  @MinLength(6)
  @Transform(({ value }) => hashString(value))
  @Exclude({ toPlainOnly: true })
  password: string;

  @IsOptional()
  @ApiProperty({
    enum: RegisterDto.AllowedStatuses,
  })
  @IsIn(RegisterDto.AllowedStatuses)
  status: typeof RegisterDto.DefaultStatus = RegisterDto.DefaultStatus;

}
