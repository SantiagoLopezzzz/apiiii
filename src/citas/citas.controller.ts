import { CitasService } from './citas.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CitasDto } from './Dto/CitasDto';

@Controller('citas')
export class CitasController {

    constructor(
                    private readonly CitasService:CitasService
                ){}
            @Get('list')
                findAll(){
                return this.CitasService.findAll();
            }
            
            @Get(':idreceta')
            findOne(@Param('idreceta') idreceta: string){
                return this.CitasService.findOne(+idreceta);
            }
            
            @Post('create')
            create(@Body() createRecetas: CitasDto){
                return this.CitasService.create(createRecetas);
            }
        
            @Put(':idreceta')
            update(@Param('idreceta') idreceta: string, @Body() dto: CitasDto) {
            return this.CitasService.update(+idreceta, dto);
            }
        
            @Delete(':idreceta')
            remove(@Param('idreceta') idreceta: string) {
            return this.CitasService.remove(+idreceta);
            }
}
