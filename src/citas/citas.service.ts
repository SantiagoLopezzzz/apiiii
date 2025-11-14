import { pacientes } from 'src/pacientes/Entity/PacientesEntity';
import { Medicos } from 'src/medicos/Entity/MedicosEntity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { citas } from './Entity/CitasEntity';
import { historias_clinicas } from 'src/historias_clinicas/Entity/Historias_ClinicasEntity';
import { Repository } from 'typeorm';
import { CitasDto } from './Dto/CitasDto';

@Injectable()
export class CitasService {

    constructor(
            @InjectRepository(citas)
                private readonly citasRepository: Repository<citas>,
            @InjectRepository(Medicos)
                private readonly medicosRepository: Repository<Medicos>,
            @InjectRepository(pacientes)
                private readonly pacientesRepository: Repository<pacientes>,        
            @InjectRepository(historias_clinicas)    
                private readonly historias_clinicasRepository: Repository<historias_clinicas>
              ) {}
        
        
              async findAll(){
                return await this.citasRepository.find();
            }
            
            async findOne(idcita:number){
                return await this.citasRepository.findOneBy({idcita});
            }
            
            async create(createCitas: CitasDto){
                const medi = await this.medicosRepository.findOneBy({
                  idmedico:createCitas.medi
                });
                if (!medi)throw new NotFoundException('Historia no encontrada') 
                const paci = await this.pacientesRepository.findOneBy({
                  idpaciente:createCitas.paci
                });
                if (!paci)throw new NotFoundException('Historia no encontrada') 

                const histo_cli = await this.historias_clinicasRepository.findOneBy({
                  idhistoria:createCitas.histo_cli
                });
                if (!histo_cli)throw new NotFoundException('Historia no encontrada') 
                  
                  const nuevo = this.citasRepository.create(
                    {
                    fecha: createCitas.fecha,
                    motivo : createCitas.motivo,
                    estado: createCitas.estado,
                    estado_registro: createCitas.estado_registro,
                    medi,
                    paci,
                    histo_cli
        
                    }
                  );
                  return this.citasRepository.save(nuevo);
              }
        
          async update(idcita: number, updateCita: CitasDto) {
          const citaExistente = await this.citasRepository.findOneBy({ idcita });
          if (!citaExistente) {
            throw new NotFoundException('Citas no encontrada');
          }
          let historias_clinicas = citaExistente.histo_cli;
          if (updateCita.histo_cli) {
            historias_clinicas = await this.historias_clinicasRepository.findOneBy({ idhistoria: updateCita.histo_cli });
            if (!historias_clinicas) {
              throw new NotFoundException('Historia no encontrada');
            }
          }

          let medicos = citaExistente.medi;
          if (updateCita.medi) {
            medicos = await this.medicosRepository.findOneBy({ idmedico: updateCita.medi });
            if (!medicos) {
              throw new NotFoundException('Medicos no encontrados');
            }
          }

          let pacientes = citaExistente.paci;
          if (updateCita.paci) {
            pacientes = await this.pacientesRepository.findOneBy({ idpaciente: updateCita.paci });
            if (!pacientes) {
              throw new NotFoundException('Pacientes no encontrados');
            }
          }

          citaExistente.fecha = updateCita.fecha ?? citaExistente.fecha;
          citaExistente.motivo = updateCita.motivo ?? citaExistente.motivo;
          citaExistente.estado = updateCita.estado ?? citaExistente.estado,
          citaExistente.estado_registro = updateCita.estado_registro ?? citaExistente.estado_registro,
          citaExistente.medi = medicos,
          citaExistente.paci = pacientes,
          citaExistente.histo_cli = historias_clinicas;
          return await this.citasRepository.save(citaExistente);
        }
        
        
          async remove(idcita: number) {
          const producto = await this.citasRepository.findOneBy({ idcita });
          if (!producto) {
            throw new NotFoundException('Cita no encontrada');
          }
        
          return await this.citasRepository.remove(producto);
        }
        
}
