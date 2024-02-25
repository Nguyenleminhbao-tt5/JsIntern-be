import { BaseDto } from "@/common/dto/base.dto";
import { Expose } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";



export class ProductDto extends BaseDto{
    
    @IsNotEmpty()
    @IsString()
    @Expose()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    @Expose()
    price: number;

    @IsNotEmpty()
    @IsString()
    @Expose()
    description: string;
    
    @IsNotEmpty()
    @IsString()
    @Expose()
    image: string;

    @IsNotEmpty()
    @IsString()
    @Expose()
    color: string;

    //isCart: boolean;
}