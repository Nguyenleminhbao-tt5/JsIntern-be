import { BaseDto } from "@/common/dto/base.dto";
import { Expose } from "class-transformer";
import { IsArray, IsNotEmpty } from "class-validator";



export class CartDto extends BaseDto {
    
    @IsNotEmpty()
    @IsArray()
    @Expose()
    product_id_list: string[];

}