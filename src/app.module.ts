import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CartsModule, LoggerModule, ProductsModule} from './modules';
import { AppControler } from './app.controller';


@Module({
  imports: [
    LoggerModule,
    ProductsModule,
    CartsModule,
    ConfigModule.forRoot(),
  ],
  controllers: [AppControler],
  providers: [],
})
export class AppModule {}
