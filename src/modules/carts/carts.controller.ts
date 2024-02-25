import { Body, Controller, Get, Post } from "@nestjs/common";
import { CartsService } from "./carts.service";
import { CartDto } from "./dto/cart.dto";



@Controller('/api/v1/carts')
export class CartsController {
    constructor(private readonly cartsService: CartsService){
    }
    
    @Get()
    async getAllCarts(){
        try{
            const response = await this.cartsService.getCarts();
            return response;
        }
        catch(error){
            throw error;
        }   
    }

    @Post()
    async updateCarts(@Body() list_products: CartDto){
        try{
            const newList = CartDto.plainToClass(list_products);
            const response = await this.cartsService.updateCart(newList);
            return response;
        }
        catch(error){
            throw error;
        }   
    }
}