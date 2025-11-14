import { especialidades } from './Entity/EspecialidadesEntity';
import { EspecialdadesService } from './especialdades.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('especialdades')
export class EspecialdadesController {
    constructor(
        private readonly EspecialdadesService:EspecialdadesService
    ){}
    @Get('list')
    findAll(){
        return this.EspecialdadesService.findAll();
    }

    @Get(':idespecialidad')
    findOne(@Param('idespecialidad') idespecialidad: string){
        return this.EspecialdadesService.findOne(+idespecialidad);
    }

    @Post('create')
    create(@Body() createEspecialidad: especialidades){
        return this.EspecialdadesService.create(createEspecialidad);
    }

    @Put(':idespecialidad')
    update(@Param('idespecialidad') idespecialidad:String, @Body()provee:especialidades){
        return this.EspecialdadesService.update(+idespecialidad,provee)
    }

    @Delete(':id')
    delete(@Param('id') id:String){
        return this.EspecialdadesService.remove(+id);
    }}
