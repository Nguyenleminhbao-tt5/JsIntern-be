import { IResponse } from "@/common/interfaces/response.interface";
import { SupabaseService } from "@/database/supabase.service";
import { HttpStatus, Injectable } from "@nestjs/common";
import { SupabaseClient } from "@supabase/supabase-js";
import { CartDto } from "./dto/cart.dto";


@Injectable()
export class CartsService {
    private supabase: SupabaseClient
    constructor( private readonly supabaseService: SupabaseService){
        if (this.supabaseService) {
          this.supabase = supabaseService.connection();
        } else console.log('connect supabase failed');
      }

    async getCarts() {
        try{
            const { data, error } = await this.supabase.from('carts').select();
            return {
              code: HttpStatus.OK,
              type: 'Success',
              message: data,
            } as IResponse;
        }
        catch(err){
            return {
                code: HttpStatus.INTERNAL_SERVER_ERROR,
                type: 'Error',
                message: 'Get all carts failed',
              } as IResponse;
        }
    }

    async updateCart(newList: CartDto) {
        try{
          const { data, error } = await this.supabase
          .from('carts')
          .update(newList)
          .eq('id', 'cart')
          .select();
  
        if (!error)
          return {
            code: HttpStatus.OK,
            type: 'Success',
            message: data[0],
          } as IResponse;
        }
        catch(err){
          return {
            code: HttpStatus.INTERNAL_SERVER_ERROR,
            type: 'Error',
            message: 'Update cart failed',
          } as IResponse;
        }
    }
}