import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService,private jwtservice:JwtService ) { }
  async Login(dto: CreateAuthDto) {

    const { password, email } = dto;
    const user = await this.prisma.users.findUnique({ where: { email } })
    if (!user) {
      throw new HttpException('invalid email',HttpStatus.BAD_REQUEST);

    }
    const validpassword=await bcrypt.compare(password,user.mdp);
    if(!validpassword){
      throw new HttpException('invalid password',HttpStatus.BAD_REQUEST);
    }
    const {mdp,...rest}=user

    const token = await this.jwtservice.signAsync(rest);
    return token; 
  }

  async signUp(dto: CreateAuthDto) {
  }


  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
