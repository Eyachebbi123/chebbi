import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) { }
  create(createProductDto: CreateProductDto) {
    return this.prisma.products.create({
      data: createProductDto
    })
  }
  async createByC(createProductDto: CreateProductDto, categoryId: number) {
    const category = await this.prisma.category.findUnique({
      where: { id: categoryId },
    });
    if (!category) {
      throw new Error(`Category with id ${categoryId} does not exist.`);
    }

    // Check if the category is "fruit"
    if (category.name !== 'fruit') {
      throw new Error('Product category must be "fruit"');
    }

    // Create the product with the specified category
    return this.prisma.products.create({
      data: {
        ...createProductDto,
        categoryId: categoryId, // Assuming categoryId is the foreign key in the products table
      },
    });
  }


  findAllByCategory(title:string) {
    return this.prisma.products.findMany({
      include:{Category:true,SubCategory:true},
      where: {
        Category: {
          name: title
        }

      },
      
    })
  }
  findAll() {
    return this.prisma.products.findMany({include:{Category:true}})
  }
  // findAllByCategoryetSub(title: string, subTit: string) {
  //   return this.prisma.products.findMany({
  //     include: {
  //       Category: {
  //         include: { subcategory: true }
  //       }
  //     },
  //     where: {
  //       Category: {
  //         AND: [
  //           { name: title },
  //           { subcategory: { some: { name: subTit } } }
  //         ]
  //       }
  //     }
  //   })
  // }
  

  findOne(id: number) {
    return this.prisma.products.findUnique({
      where: { id },
      include:{SubCategory:true}
    });
  }
  findOneName(productName: string) {
    return this.prisma.products.findMany({
      where: { productName },
    });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const { productName } = updateProductDto;
    return this.prisma.products.update({
      where: { id },
      data: { productName },
    });
  }


  async remove(id: number) {
    return this.prisma.products.delete({
      where: { id },
    });
  }

}
