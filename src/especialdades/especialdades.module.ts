import { Module } from '@nestjs/common';
import { EspecialdadesController } from './especialdades.controller';
import { EspecialdadesService } from './especialdades.service';
import { especialidades } from './Entity/EspecialidadesEntity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([especialidades])],
  controllers: [EspecialdadesController],
  providers: [EspecialdadesService]
})
export class EspecialdadesModule {}
