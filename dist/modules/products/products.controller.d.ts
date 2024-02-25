import { ProductDto } from "./dto/product.dto";
import { ProductsService } from "./products.service";
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    getAllProducts(): Promise<import("../../common/interfaces/response.interface").IResponse>;
    createProduct(newProduct: ProductDto): Promise<import("../../common/interfaces/response.interface").IResponse | {
        code: import("@nestjs/common").HttpStatus;
        type: string;
        data: string;
    }>;
    showProduct(product_id: string): Promise<import("../../common/interfaces/response.interface").IResponse>;
    updateProduct(product_id: string, editProduct: ProductDto): Promise<import("../../common/interfaces/response.interface").IResponse>;
    deleteProduct(product_id: string): Promise<import("../../common/interfaces/response.interface").IResponse>;
}
