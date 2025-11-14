import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { especialidades } from './Entity/EspecialidadesEntity';
import { Repository } from 'typeorm';

@Injectable()
export class EspecialdadesService {
    constructor(
        @InjectRepository(especialidades)
        private readonly especialidadesRepository: Repository<especialidades>,
      ) {}
      async findAll(){
        return await this.especialidadesRepository.find();
      }
    
      async findOne(idespecialidad:number){
        return await this.especialidadesRepository.findOneBy({idespecialidad});
      }
    
      async create(createEspecialidad: especialidades){
        const prov = this.especialidadesRepository.create(createEspecialidad);
        return await this.especialidadesRepository.save(prov);
      }
    
      async update(id: number, updateEspecialidades: especialidades){
        return await this.especialidadesRepository.update(id, updateEspecialidades);
      }
    
      async remove(idespecialidad: number){
        return await this.especialidadesRepository.softDelete(idespecialidad);
      }
    
}
