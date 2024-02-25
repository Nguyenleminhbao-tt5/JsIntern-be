import { IResponse } from "@/common/interfaces/response.interface";
import { SupabaseService } from "@/database/supabase.service";
import { CartDto } from "./dto/cart.dto";
export declare class CartsService {
    private readonly supabaseService;
    private supabase;
    constructor(supabaseService: SupabaseService);
    getCarts(): Promise<IResponse>;
    updateCart(newList: CartDto): Promise<IResponse>;
}
