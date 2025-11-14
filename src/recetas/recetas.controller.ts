import { recetasDto } from './Dto/RecetasDto';
import { RecetasService } from './recetas.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('recetas')
export class RecetasController {

    constructor(
                private readonly RecetasService:RecetasService
            ){}
        @Get('list')
            findAll(){
            return this.RecetasService.findAll();
        }
        
        @Get(':idreceta')
        findOne(@Param('idreceta') idreceta: string){
            return this.RecetasService.findOne(+idreceta);
        }
        
        @Post('create')
        create(@Body() createRecetas: recetasDto){
            return this.RecetasService.create(createRecetas);
        }
    
        @Put(':idreceta')
        update(@Param('idreceta') idreceta: string, @Body() dto: recetasDto) {
        return this.RecetasService.update(+idreceta, dto);
        }
    
        @Delete(':idreceta')
        remove(@Param('idreceta') idreceta: string) {
        return this.RecetasService.remove(+idreceta);
        }
    
}
