import { Module } from '@nestjs/common';
import { CitasController } from './citas.controller';
import { CitasService } from './citas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { citas } from './Entity/CitasEntity';
import { Medicos } from 'src/medicos/Entity/MedicosEntity';
import { pacientes } from 'src/pacientes/Entity/PacientesEntity';
import { historias_clinicas } from 'src/historias_clinicas/Entity/Historias_ClinicasEntity';

@Module({
  imports:[TypeOrmModule.forFeature([citas, Medicos, pacientes, historias_clinicas])],
  controllers: [CitasController],
  providers: [CitasService]
})
export class CitasModule {}
