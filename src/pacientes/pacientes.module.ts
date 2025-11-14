import { Module } from '@nestjs/common';
import { PacientesController } from './pacientes.controller';
import { PacientesService } from './pacientes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { pacientes } from './Entity/PacientesEntity';

@Module({
  imports:[TypeOrmModule.forFeature([pacientes])],
  controllers: [PacientesController],
  providers: [PacientesService]
})
export class PacientesModule {}
