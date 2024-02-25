import { IResponse } from "@/common/interfaces/response.interface";
import { SupabaseService } from "@/database/supabase.service";
import { HttpStatus } from "@nestjs/common";
import { ProductDto } from "./dto/product.dto";
export declare class ProductsService {
    private readonly supabaseService;
    private supabase;
    constructor(supabaseService: SupabaseService);
    getAllProducts(): Promise<IResponse>;
    createProduct(newProduct: ProductDto): Promise<IResponse | {
        code: HttpStatus;
        type: string;
        data: string;
    }>;
    showProduct(product_id: string): Promise<IResponse>;
    updateProduct(product_id: string, editProduct: ProductDto): Promise<IResponse>;
    deleteProduct(product_id: string): Promise<IResponse>;
}
