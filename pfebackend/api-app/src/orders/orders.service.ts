 import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateOrderDto) {
    const { price, productIds, userId, address, phone } = dto;
    return this.prisma.order.create({
      data: {
        ...dto,
        price,
        userId,
      
       
        products: {
          connect: productIds.map(id => ({ id })),
        },
      },
    });
  }
  async findAll() {
    return this.prisma.order.findMany({include:{products:true}});
  }

  // async findOne(id: number) {
  //   const order = await this.prisma.order.findUnique({
  //     where: { id },
  //   });
  //   if (!order) {
  //     throw new NotFoundException(`Order with id ${id} not found`);
  //   }
  //   return order;
  // }

  // async update(id: number, updateOrderDto: UpdateOrderDto) {
  //   const { orderNumber, price } = updateOrderDto;
  //   return this.prisma.order.update({
  //     where: { id },
  //     data: { orderNumber, price },
  //   });
  // }

  // async remove(id: number) {
  //   return this.prisma.order.delete({
  //     where: { id },
  //   });
  // }
}
