import { AccesosService } from './accesos.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AccesosDto } from './Dto/AccesosDto';

@Controller('accesos')
export class AccesosController {

    constructor(
            private readonly AccesosService:AccesosService
        ){}
        @Get('list')
        findAll(){
            return this.AccesosService.findAll();
        }
    
        @Get(':idAcceso')
        findOne(@Param('idAcceso') idAcceso: string){
            return this.AccesosService.findOne(+idAcceso);
        }

        @Post('create')
            create(@Body() createAccesos: AccesosDto){
                return this.AccesosService.create(createAccesos);
            }
        
        @Put(':idAccesos')
        update(@Param('idAccesos') idAccesos: string, @Body() dto: AccesosDto) {
            return this.AccesosService.update(+idAccesos, dto);
        }
        
        @Delete(':idAccesos')
        remove(@Param('idAccesos') idAccesos: string) {
            return this.AccesosService.remove(+idAccesos);
        }
    
}
