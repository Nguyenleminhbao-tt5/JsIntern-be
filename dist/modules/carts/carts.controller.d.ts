import { CartsService } from "./carts.service";
import { CartDto } from "./dto/cart.dto";
export declare class CartsController {
    private readonly cartsService;
    constructor(cartsService: CartsService);
    getAllCarts(): Promise<import("../../common/interfaces/response.interface").IResponse>;
    updateCarts(list_products: CartDto): Promise<import("../../common/interfaces/response.interface").IResponse>;
}
