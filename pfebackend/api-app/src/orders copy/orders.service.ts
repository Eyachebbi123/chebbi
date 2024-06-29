 import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateOrderDto) {
    const { price, items, userId, phone, address } = dto;

    // Check if the userId exists
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException(`User with id ${userId} not found`);
    }

    const order = await this.prisma.order.create({
      data: {
        price,
        userId,
        phone,
        address,
        orderItems: {
          create: items.map(item => ({
            productId: item.id,
            quantity: item.quantity,
          })),
        },
      },
    });

    return order;
  }


  async findAll() {
    return this.prisma.order.findMany({include:{orderItems:true,user:true}});
  }

  async findOne(id: number) {
    const order = await this.prisma.order.findUnique({
      where: { id },include:{orderItems:{include:{product:true}},user:true}
    });
    if (!order) {
      throw new NotFoundException(`Order with id ${id} not found`);
    }
    return order;
  }

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
