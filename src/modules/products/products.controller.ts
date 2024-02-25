import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ProductDto } from "./dto/product.dto";
import { ProductsService } from "./products.service";



@Controller('/api/v1/products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}
  
    @Get()
    async getAllProducts() {
      try {
        const response = await this.productsService.getAllProducts();
        return response;
      } catch (err) {
        throw err;
      }
    }
  
    @Post()
    async createProduct(@Body() newProduct: ProductDto) {
      try {
        newProduct = ProductDto.plainToClass(newProduct);
        const response = await this.productsService.createProduct(newProduct);
        return response;
      } catch (err) {
        throw err;
      }
    }
  
    @Get(':id')
    async showProduct(@Param('id') product_id: string) {
      try {
        const response = await this.productsService.showProduct(product_id);
        return response;
      } catch (err) {
        throw err;
      }
    }
  
    @Put(':id')
    async updateProduct(
      @Param('id') product_id: string,
      @Body() editProduct: ProductDto,
    ) {
      try {
        const response = await this.productsService.updateProduct(
          product_id,
          editProduct,
        );
        return response;
      } catch (err) {
        throw err;
      }
    }
  
    @Delete(':id')
    async deleteProduct(@Param('id') product_id: string) {
      try {
        const response = await this.productsService.deleteProduct(product_id);
        return response;
      } catch (err) {
        throw err;
      }
    }
  }
  
