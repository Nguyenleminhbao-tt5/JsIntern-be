import { Controller, Get, HttpStatus } from "@nestjs/common";


@Controller()
export class AppControler{
    
    @Get()
    async getHello(){
        return {
            code: HttpStatus.OK,
            type: "Success",
            data: "Welcome to Shoes Shop"
        }
    }
}