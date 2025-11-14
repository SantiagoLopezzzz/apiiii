import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { pacientes } from './Entity/PacientesEntity';
import { Repository } from 'typeorm';

@Injectable()
export class PacientesService {
    constructor(
    @InjectRepository(pacientes)
    private readonly pacientesRepository: Repository<pacientes>,
  ) {}
  async findAll(){
    return await this.pacientesRepository.find();
  }

  async findOne(idpaciente:number){
    return await this.pacientesRepository.findOneBy({idpaciente});
  }

  async create(createPaciente: pacientes){
    const prov = this.pacientesRepository.create(createPaciente);
    return await this.pacientesRepository.save(prov);
  }

  async update(id: number, updatePaciente: pacientes){
    return await this.pacientesRepository.update(id, updatePaciente);
  }

  async remove(idpaciente: number){
    return await this.pacientesRepository.softDelete(idpaciente);
  }

}
