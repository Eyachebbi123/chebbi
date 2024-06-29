import { ApiProperty } from "@nestjs/swagger";

export class CreateOrderDto {
  @ApiProperty()
  price: number;
  @ApiProperty()

  userId: number;
  @ApiProperty()

  phone: number;
  @ApiProperty()

  address: string;
  @ApiProperty()

  items: { id: number, quantity: number }[];
}
