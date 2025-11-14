import { Module } from '@nestjs/common';
import { HistoriasClinicasController } from './historias_clinicas.controller';
import { HistoriasClinicasService } from './historias_clinicas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { historias_clinicas } from './Entity/Historias_ClinicasEntity';

@Module({
  imports:[TypeOrmModule.forFeature([historias_clinicas])],
  controllers: [HistoriasClinicasController],
  providers: [HistoriasClinicasService]
})
export class HistoriasClinicasModule {} 
