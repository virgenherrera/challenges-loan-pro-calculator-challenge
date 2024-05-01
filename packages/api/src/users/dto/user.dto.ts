import { ApiProperty } from "@nestjs/swagger";

import { Exclude } from "class-transformer";
import { IsDefined, IsEmail, IsOptional, MinLength } from "class-validator";
import { Record, User } from "../../entities";

export class UserDto implements User {
  @ApiProperty({
    description: 'Unique identifier of the User',
  })
  id: number;

  @IsDefined()
  @IsEmail()
  @ApiProperty({
    description: 'Email of the User',
  })
  email: string;

  @Exclude({ toPlainOnly: true })
  @IsDefined()
  @MinLength(6)
  password: string;

  @IsOptional()
  @ApiProperty()
  status: "active" | "inactive" = 'active';

  @Exclude({ toClassOnly: true })
  records: Record[];
}
