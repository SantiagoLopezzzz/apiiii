import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { historias_clinicas } from './Entity/Historias_ClinicasEntity';
import { Repository } from 'typeorm';

@Injectable()
export class HistoriasClinicasService {
    constructor(
    @InjectRepository(historias_clinicas)
    private readonly historias_clinicasRepository: Repository<historias_clinicas>,
  ) {}
  async findAll(){
    return await this.historias_clinicasRepository.find();
  }

  async findOne(idhistoria:number){
    return await this.historias_clinicasRepository.findOneBy({idhistoria});
  }

  async create(createHistorias_clinicas: historias_clinicas){
    const prov = this.historias_clinicasRepository.create(createHistorias_clinicas);
    return await this.historias_clinicasRepository.save(prov);
  }

  async update(id: number, updateHistorias_clinicas: historias_clinicas){
    return await this.historias_clinicasRepository.update(id, updateHistorias_clinicas);
  }

  async remove(idhistoria: number){
    return await this.historias_clinicasRepository.softDelete(idhistoria);
  }

}
