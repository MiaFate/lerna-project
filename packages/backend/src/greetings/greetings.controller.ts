import { Controller, Get } from '@nestjs/common';

@Controller('greetings')
export class GreetingsController {
    @Get()
    getHello(): object {
        return { message: "Como andan banda? (desde el backend xD)" }
    }
}
