import { Module } from '@nestjs/common';
import { MedicosController } from './medicos.controller';
import { MedicosService } from './medicos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Medicos } from './Entity/MedicosEntity';
import { especialidades } from 'src/especialdades/Entity/EspecialidadesEntity';

@Module({
  imports:[TypeOrmModule.forFeature([Medicos, especialidades])],
  controllers: [MedicosController],
  providers: [MedicosService]
})
export class MedicosModule {}
