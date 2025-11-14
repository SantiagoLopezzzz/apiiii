import { MedicosDto } from './DTO/MedicosDto';
import { MedicosService } from './medicos.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('medicos')
export class MedicosController {

constructor(
    private readonly medicosService:MedicosService
        ){}
    @Get('list')
    findAll(){
        return this.medicosService.findAll();
    }
        
    @Get(':idmedico')
    findOne(@Param('idmedico') idmedico: string){
        return this.medicosService.findOne(+idmedico);
    }
    
    @Post('create')
    create(@Body() createMedicos: MedicosDto){
        return this.medicosService.create(createMedicos);
    }
            
    @Put(':idmedico')
    update(@Param('idmedico') idmedico: string, @Body() dto: MedicosDto) {
        return this.medicosService.update(+idmedico, dto);
    }
            
    @Delete(':idmedico')
    remove(@Param('idmedico') idmedico: string) {
        return this.medicosService.remove(+idmedico);
    }
}
