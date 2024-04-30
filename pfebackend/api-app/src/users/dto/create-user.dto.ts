
import {ApiProperty}from'@nestjs/swagger';
import {IsEmail} from'class-validator'

export class CreateUserDto {
    @IsEmail()
    @ApiProperty()
    email:string
    @ApiProperty()
   Password:string
    @ApiProperty()
    fullname :string
    @ApiProperty()
    age:number
    @ApiProperty()
    adresse:string
    @ApiProperty()
    mobilephone:string
}
