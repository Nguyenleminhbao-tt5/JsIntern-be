import { IResponse } from "@/common/interfaces/response.interface";
import { SupabaseService } from "@/database/supabase.service";
import { HttpStatus, Injectable } from "@nestjs/common";
import { SupabaseClient } from "@supabase/supabase-js";
import { ProductDto } from "./dto/product.dto";




@Injectable()
export class ProductsService {

    private supabase: SupabaseClient;
    constructor( private readonly supabaseService: SupabaseService){
      if (this.supabaseService) {
        this.supabase = supabaseService.connection();
      } else console.log('connect supabase failed');
    }

    async getAllProducts() {
        try {
          const { data, error } = await this.supabase.from('products').select();
          return {
            code: HttpStatus.OK,
            type: 'Success',
            message: data,
          } as IResponse;
        } catch (err) {
          return {
            code: HttpStatus.INTERNAL_SERVER_ERROR,
            type: 'Error',
            message: 'Get all users failed',
          } as IResponse;
        }
      }
    
      async createProduct(newProduct: ProductDto) {
        try {
          const { data: checkProduct } = await this.supabase
            .from('products')
            .select('*')
            .eq('product_name', newProduct.name)
            .single();
    
          if (checkProduct) {
            return {
              code: HttpStatus.BAD_REQUEST,
              type: 'Error',
              data: 'Product already Exists',
            };
          } else {
            
            const { data, error } = await this.supabase
              .from('products')
              .insert(newProduct)
              .select();
            if (!error)
              return {
                code: HttpStatus.OK,
                type: 'Success',
                message: data[0],
              } as IResponse;
          }
        } catch (err) {
          return {
            code: HttpStatus.INTERNAL_SERVER_ERROR,
            type: 'Error',
            message: 'Create product failed',
          } as IResponse;
        }
      }
    
      async showProduct(product_id: string) {
        try {
          const { data, error } = await this.supabase
            .from('products')
            .select()
            .eq('id', product_id)
            .single();
          if (data) {
            return {
              code: HttpStatus.OK,
              type: 'Success',
              message: data,
            } as IResponse;
          } else {
            return {
              code: HttpStatus.BAD_REQUEST,
              type: 'Error',
              message: 'Product not exists',
            } as IResponse;
          }
        } catch (err) {
          return {
            code: HttpStatus.INTERNAL_SERVER_ERROR,
            type: 'Error',
            message: 'Show product failed',
          } as IResponse;
        }
      }
    
      async updateProduct(product_id: string, editProduct: ProductDto) {
        try {
          const { data, error } = await this.supabase
            .from('products')
            .update(editProduct)
            .eq('id', product_id)
            .select();
    
          if (!error)
            return {
              code: HttpStatus.OK,
              type: 'Success',
              message: data[0],
            } as IResponse;
        } catch (err) {
          return {
            code: HttpStatus.INTERNAL_SERVER_ERROR,
            type: 'Error',
            message: 'Update product failed',
          } as IResponse;
        }
      }
    
      async deleteProduct(product_id: string) {
        try {
          const { error } = await this.supabase
            .from('products')
            .delete()
            .eq('id', product_id);
          if (!error)
            return {
              code: HttpStatus.OK,
              type: 'Success',
              message: 'Delete product successfully',
            } as IResponse;
        } catch (err) {
          return {
            code: HttpStatus.INTERNAL_SERVER_ERROR,
            type: 'Error',
            message: 'Delete product failed',
          } as IResponse;
        }
      }
}