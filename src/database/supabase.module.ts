import { LoggerModule } from "@/modules/logger/logger.module";
import { Global, Module } from "@nestjs/common";
import { SupabaseService } from "./supabase.service";



@Global()
@Module({
    imports: [LoggerModule],
    providers:[SupabaseService],
    exports: [SupabaseService]
})

export class SupabaseModule {}