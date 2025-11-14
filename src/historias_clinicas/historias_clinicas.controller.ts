import { historias_clinicas } from './Entity/Historias_ClinicasEntity';
import { HistoriasClinicasService } from './historias_clinicas.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('historias-clinicas')
export class HistoriasClinicasController {
    constructor(
        private readonly HistoriasClinicasService:HistoriasClinicasService
    ){}
    @Get('list')
    findAll(){
        return this.HistoriasClinicasService.findAll();
    }

    @Get(':idhistoria')
    findOne(@Param('idhistoria') idhistoria: string){
        return this.HistoriasClinicasService.findOne(+idhistoria);
    }

    @Post('create')
    create(@Body() createHistoria: historias_clinicas){
        return this.HistoriasClinicasService.create(createHistoria);
    }

    @Put(':idhistoria')
    update(@Param('idhistoria') idhistoria:String, @Body()provee:historias_clinicas){
        return this.HistoriasClinicasService.update(+idhistoria,provee)
    }

    @Delete(':id')
    delete(@Param('id') id:String){
        return this.HistoriasClinicasService.remove(+id);
    }
}
