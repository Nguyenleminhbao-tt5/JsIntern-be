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
exports.CartsService = void 0;
const supabase_service_1 = require("../../database/supabase.service");
const common_1 = require("@nestjs/common");
let CartsService = class CartsService {
    constructor(supabaseService) {
        this.supabaseService = supabaseService;
        if (this.supabaseService) {
            this.supabase = supabaseService.connection();
        }
        else
            console.log('connect supabase failed');
    }
    async getCarts() {
        try {
            const { data, error } = await this.supabase.from('carts').select();
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
                message: 'Get all carts failed',
            };
        }
    }
    async updateCart(newList) {
        try {
            const { data, error } = await this.supabase
                .from('carts')
                .update(newList)
                .eq('id', 'cart')
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
                message: 'Update cart failed',
            };
        }
    }
};
exports.CartsService = CartsService;
exports.CartsService = CartsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [supabase_service_1.SupabaseService])
], CartsService);
//# sourceMappingURL=carts.service.js.map