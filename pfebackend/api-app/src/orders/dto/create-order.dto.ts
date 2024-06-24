import { ApiProperty } from "@nestjs/swagger";

export class CreateOrderDto {
    @ApiProperty()
    price: number;
    @ApiProperty()

    productIds: number[];
    @ApiProperty()

    userId: number;
    @ApiProperty()
    phone: number
    address : string
  }
