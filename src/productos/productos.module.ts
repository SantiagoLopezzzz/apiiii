import { Module } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductosController } from './productos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './Entity/productoEntity';
import { proveedor } from 'src/proveedores/entity/proveedorentity';

@Module({
  imports:[TypeOrmModule.forFeature([Producto, proveedor])],
  providers: [ProductosService],
  controllers: [ProductosController]
})
export class ProductosModule {}
