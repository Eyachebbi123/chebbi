import { ApiProperty } from "@nestjs/swagger"
import { IsEAN, IsEmail } from "class-validator"

export class CreateAuthDto {
    @IsEmail()
@ApiProperty()
    email:string
    @ApiProperty()
    password:string
}
