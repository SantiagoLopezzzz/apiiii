import { pacientes } from './Entity/PacientesEntity';
import { PacientesService } from './pacientes.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('pacientes')
export class PacientesController {
    constructor(
        private readonly PacientesService:PacientesService
    ){}
    @Get('list')
    findAll(){
        return this.PacientesService.findAll();
    }

    @Get(':idpaciente')
    findOne(@Param('idpaciente') idpaciente: string){
        return this.PacientesService.findOne(+idpaciente);
    }

    @Post('create')
    create(@Body() createPaciente: pacientes){
        return this.PacientesService.create(createPaciente);
    }

    @Put(':idpaciente')
    update(@Param('idpaciente') idpaciente:String, @Body()provee:pacientes){
        return this.PacientesService.update(+idpaciente,provee)
    }

    @Delete(':id')
    delete(@Param('id') id:String){
        return this.PacientesService.remove(+id);
    }
}
