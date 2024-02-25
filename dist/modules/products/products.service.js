"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const supabase_service_1 = require("../../database/supabase.service");
const common_1 = require("@nestjs/common");
let ProductsService = class ProductsService {
    constructor(supabaseService) {
        this.supabaseService = supabaseService;
        if (this.supabaseService) {
            this.supabase = supabaseService.connection();
        }
        else
            console.log('connect supabase failed');
    }
    async getAllProducts() {
        try {
            const { data, error } = await this.supabase.from('products').select();
            return {
                code: common_1.HttpStatus.OK,
                type: 'Success',
                message: data,
            };
        }
        catch (err) {
            return {
                code: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                type: 'Error',
                message: 'Get all users failed',
            };
        }
    }
    async createProduct(newProduct) {
        try {
            const { data: checkProduct } = await this.supabase
                .from('products')
                .select('*')
                .eq('product_name', newProduct.name)
                .single();
            if (checkProduct) {
                return {
                    code: common_1.HttpStatus.BAD_REQUEST,
                    type: 'Error',
                    data: 'Product already Exists',
                };
            }
            else {
                const { data, error } = await this.supabase
                    .from('products')
                    .insert(newProduct)
                    .select();
                if (!error)
                    return {
                        code: common_1.HttpStatus.OK,
                        type: 'Success',
                        message: data[0],
                    };
            }
        }
        catch (err) {
            return {
                code: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                type: 'Error',
                message: 'Create product failed',
            };
        }
    }
    async showProduct(product_id) {
        try {
            const { data, error } = await this.supabase
                .from('products')
                .select()
                .eq('id', product_id)
                .single();
            if (data) {
                return {
                    code: common_1.HttpStatus.OK,
                    type: 'Success',
                    message: data,
                };
            }
            else {
                return {
                    code: common_1.HttpStatus.BAD_REQUEST,
                    type: 'Error',
                    message: 'Product not exists',
                };
            }
        }
        catch (err) {
            return {
                code: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                type: 'Error',
                message: 'Show product failed',
            };
        }
    }
    async updateProduct(product_id, editProduct) {
        try {
            const { data, error } = await this.supabase
                .from('products')
                .update(editProduct)
                .eq('id', product_id)
                .select();
            if (!error)
                return {
                    code: common_1.HttpStatus.OK,
                    type: 'Success',
                    message: data[0],
                };
        }
        catch (err) {
            return {
                code: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                type: 'Error',
                message: 'Update product failed',
            };
        }
    }
    async deleteProduct(product_id) {
        try {
            const { error } = await this.supabase
                .from('products')
                .delete()
                .eq('id', product_id);
            if (!error)
                return {
                    code: common_1.HttpStatus.OK,
                    type: 'Success',
                    message: 'Delete product successfully',
                };
        }
        catch (err) {
            return {
                code: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                type: 'Error',
                message: 'Delete product failed',
            };
        }
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [supabase_service_1.SupabaseService])
], ProductsService);
//# sourceMappingURL=products.service.js.map