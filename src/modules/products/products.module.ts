import { Module } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { SupabaseModule } from "@/database/supabase.module";
import { ProductsController } from "./products.controller";





@Module({
    imports: [SupabaseModule],
    controllers:[ProductsController],
    providers:[ProductsService],
})

export class ProductsModule {}