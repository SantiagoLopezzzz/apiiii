import { Module } from '@nestjs/common';
import { AccesosService } from './accesos.service';
import { AccesosController } from './accesos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Accesos } from './Entity/accesosEntity';
import { proveedor } from 'src/proveedores/entity/proveedorentity';

@Module({
  imports:[TypeOrmModule.forFeature([Accesos, proveedor])],
  providers: [AccesosService],
  controllers: [AccesosController]
})
export class AccesosModule {}
