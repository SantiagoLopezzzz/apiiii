import { Module } from '@nestjs/common';
import { RecetasController } from './recetas.controller';
import { RecetasService } from './recetas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { recetas } from './Entity/RecetasEntity';
import { historias_clinicas } from 'src/historias_clinicas/Entity/Historias_ClinicasEntity';

@Module({
  imports:[TypeOrmModule.forFeature([recetas, historias_clinicas])],
  controllers: [RecetasController],
  providers: [RecetasService]
})
export class RecetasModule {}
