import { SupabaseModule } from "@/database/supabase.module";
import { Module } from "@nestjs/common";
import { CartsService } from "./carts.service";
import { CartsController } from "./carts.controller";




@Module({
    imports: [SupabaseModule],
    controllers: [CartsController],
    providers: [CartsService]
})

export class CartsModule {}