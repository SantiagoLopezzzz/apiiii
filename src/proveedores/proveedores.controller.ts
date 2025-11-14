import { proveedor } from './entity/proveedorentity';
import { ProveedoresService } from './proveedores.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('proveedores')
export class ProveedoresController {

    constructor(
        private readonly ProveedoresService:ProveedoresService
    ){}
    @Get('list')
    findAll(){
        return this.ProveedoresService.findAll();
    }

    @Get(':idproveedor')
    findOne(@Param('idproveedor') idproveedor: string){
        return this.ProveedoresService.findOne(+idproveedor);
    }

    @Post('create')
    create(@Body() createProveedor: proveedor){
        return this.ProveedoresService.create(createProveedor);
    }

    @Put(':idproveedor')
    update(@Param('idproveedor') idProveedor:String, @Body()provee:proveedor){
        return this.ProveedoresService.update(+idProveedor,provee)
    }

    @Delete(':id')
    delete(@Param('id') id:String){
        return this.ProveedoresService.remove(+id);
    }
}
