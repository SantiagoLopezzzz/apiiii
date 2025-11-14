import { Module } from '@nestjs/common';
import { ProveedoresController } from './proveedores.controller';
import { ProveedoresService } from './proveedores.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { proveedor } from './entity/proveedorentity';

@Module({
  imports:[TypeOrmModule.forFeature([proveedor])],
  controllers: [ProveedoresController],
  providers: [ProveedoresService]
})
export class ProveedoresModule {}
