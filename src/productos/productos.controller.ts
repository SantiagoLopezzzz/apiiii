import { proveedor } from 'src/proveedores/entity/proveedorentity';
import { ProductoDTO } from './DTO/ProductoDTO';
import { ProductosService } from './productos.service';
import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';

@Controller('productos')
export class ProductosController {
    constructor(
            private readonly ProductosService:ProductosService
        ){}
    @Get('list')
        findAll(){
        return this.ProductosService.findAll();
    }
    
    @Get(':idProducto')
    findOne(@Param('idProducto') idProducto: string){
        return this.ProductosService.findOne(+idProducto);
    }
    
    @Post('create')
    create(@Body() createProducto: ProductoDTO){
        return this.ProductosService.create(createProducto);
    }

    @Put(':idProducto')
    update(@Param('idProducto') idProducto: string, @Body() dto: ProductoDTO) {
    return this.ProductosService.update(+idProducto, dto);
    }

    @Delete(':idProducto')
    remove(@Param('idProducto') idProducto: string) {
    return this.ProductosService.remove(+idProducto);
    }


    
}
