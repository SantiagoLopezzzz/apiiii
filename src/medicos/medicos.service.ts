import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { especialidades } from 'src/especialdades/Entity/EspecialidadesEntity';
import { Repository } from 'typeorm';
import { MedicosDto } from './DTO/MedicosDto';
import { Medicos } from './Entity/MedicosEntity';

@Injectable()
export class MedicosService {
    constructor(
    @InjectRepository(Medicos)
    private readonly medicosRepository: Repository<Medicos>,
    
             
    @InjectRepository(especialidades)
    private readonly especialidadesRepository: Repository<especialidades>
    ) {}
    async findAll(){
        return await this.medicosRepository.find(
                
        );
    }
        
    async findOne(idmedico:number){
        return await this.medicosRepository.findOneBy({idmedico});
    }
    
    async create(createMedico: MedicosDto){
        const espec = await this.especialidadesRepository.findOneBy({
        idespecialidad:createMedico.espec
    });
        if (!espec)throw new NotFoundException('Especialidad no enconteado') 
                    
        const nuevo = this.medicosRepository.create(
        {
        nombres:createMedico.nombres,
        apellidos:createMedico.apellidos,
        tarjeta_profesional:createMedico.tarjeta_profesional,
        telefono:createMedico.telefono,
        correo: createMedico.correo,
        estado: createMedico.estado,
        espec
          
        }
        );
        return this.medicosRepository.save(nuevo);
    }
          
    async update(id: number, dto: MedicosDto) {
    // Buscar el producto existente
    const medicoExistente = await this.medicosRepository.findOneBy({ idmedico: id });
    if (!medicoExistente) throw new NotFoundException('Medico no encontrado');
         
    // Actualizar campos básicos
    medicoExistente.nombres = dto.nombres;
    medicoExistente.apellidos = dto.apellidos;
    medicoExistente.tarjeta_profesional = dto.tarjeta_profesional;
    medicoExistente.telefono = dto.telefono;
    medicoExistente.correo = dto.correo;
    medicoExistente.estado = dto.estado;

         
    // Si se envía un proveedor nuevo
    if (dto.espec) {
        const especialidadEncontrado = await this.especialidadesRepository.findOneBy({
        idespecialidad: dto.espec,
    });
        if (!especialidadEncontrado) throw new NotFoundException('Especialidad no encontrado');
            medicoExistente.espec = especialidadEncontrado;
        }
         
        // Guardar los cambios
        return await this.medicosRepository.save(medicoExistente);
    }
    
          
          
    async remove(idmedico: number) {
    const producto = await this.medicosRepository.findOneBy({ idmedico });
    if (!producto) {
        throw new NotFoundException('Producto no encontrado');
    }
          
    return await this.medicosRepository.remove(producto);
    }
}
