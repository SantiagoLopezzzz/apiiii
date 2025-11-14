import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { recetas } from './Entity/RecetasEntity';
import { Repository } from 'typeorm';
import { historias_clinicas } from 'src/historias_clinicas/Entity/Historias_ClinicasEntity';
import { recetasDto } from './Dto/RecetasDto';
import { duplexPair } from 'stream';

@Injectable()
export class RecetasService {
    constructor(
        @InjectRepository(recetas)
            private readonly recetasRepository: Repository<recetas>,
        @InjectRepository(historias_clinicas)    
            private readonly historias_clinicasRepository: Repository<historias_clinicas>
          ) {}
    
    
          async findAll(){
            return await this.recetasRepository.find();
        }
        
        async findOne(idreceta:number){
            return await this.recetasRepository.findOneBy({idreceta});
        }
        
        async create(createReceta: recetasDto){
            const hist_clini = await this.historias_clinicasRepository.findOneBy({
              idhistoria:createReceta.hist_clini
            });
            if (!hist_clini)throw new NotFoundException('Historia no enconteada') 
              
              const nuevo = this.recetasRepository.create(
                {
                  medicamento: createReceta.medicamento,
                  dosis : createReceta.dosis,
                  frecuencia: createReceta.frecuencia,
                  duracion: createReceta.duracion,
                  estado: createReceta.estado,
                  hist_clini
    
                }
              );
              return this.recetasRepository.save(nuevo);
          }
    
      async update(idreceta: number, updateReceta: recetasDto) {
      const recetaExistente = await this.recetasRepository.findOneBy({ idreceta });
      if (!recetaExistente) {
        throw new NotFoundException('Receta no encontrada');
      }
      let historias_clinicas = recetaExistente.hist_clini;
      if (updateReceta.hist_clini) {
        historias_clinicas = await this.historias_clinicasRepository.findOneBy({ idhistoria: updateReceta.hist_clini });
        if (!historias_clinicas) {
          throw new NotFoundException('Historia no encontrada');
        }
      }
      recetaExistente.medicamento = updateReceta.medicamento ?? recetaExistente.medicamento;
      recetaExistente.dosis = updateReceta.dosis ?? recetaExistente.dosis;
      recetaExistente.frecuencia = updateReceta.frecuencia ?? recetaExistente.frecuencia,
      recetaExistente.duracion = updateReceta.duracion ?? recetaExistente.duracion,
      recetaExistente.estado = updateReceta.estado ?? recetaExistente.estado,
      recetaExistente.hist_clini = historias_clinicas;
      return await this.recetasRepository.save(recetaExistente);
    }
    
    
      async remove(idreceta: number) {
      const producto = await this.recetasRepository.findOneBy({ idreceta });
      if (!producto) {
        throw new NotFoundException('Receta no encontrado');
      }
    
      return await this.recetasRepository.remove(producto);
    }
    
    
    
}
