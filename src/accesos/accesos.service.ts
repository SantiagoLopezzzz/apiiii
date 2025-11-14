import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { proveedor } from 'src/proveedores/entity/proveedorentity';
import { Repository } from 'typeorm';
import { Accesos } from './Entity/accesosEntity';
import { AccesosDto } from './Dto/AccesosDto';

@Injectable()
export class AccesosService {

    constructor(
        @InjectRepository(proveedor)
        private readonly proveedorRepository: Repository<proveedor>,

         
        @InjectRepository(Accesos)
        private readonly accesosRepository: Repository<Accesos>
      ) {}
      async findAll(){
        return await this.accesosRepository.find(
            
        );
      }
    
      async findOne(idAccesos:number){
        return await this.accesosRepository.findOneBy({idAccesos});
      }

      async create(createAcceso: AccesosDto){
              const provee = await this.proveedorRepository.findOneBy({
                idproveedor:createAcceso.proveedorFk
              });
              if (!provee)throw new NotFoundException('Acceso no enconteado') 
                
                const nuevo = this.accesosRepository.create(
                  {
                    Correo: createAcceso.Correo,
                    password: createAcceso.password,
                    provee
      
                  }
                );
                return this.accesosRepository.save(nuevo);
            }
      
    async update(id: number, dto: AccesosDto) {
                 // Buscar el producto existente
                 const accesoExistente = await this.accesosRepository.findOneBy({ idAccesos: id });
                 if (!accesoExistente) throw new NotFoundException('Producto no encontrado');
     
                 // Actualizar campos básicos
                 accesoExistente.Correo = dto.Correo;
                 accesoExistente.password = dto.password;
     
                 // Si se envía un proveedor nuevo
                 if (dto.proveedorFk) {
                   const proveedorEncontrado = await this.proveedorRepository.findOneBy({
                     idproveedor: dto.proveedorFk,
                   });
                   if (!proveedorEncontrado) throw new NotFoundException('Proveedor no encontrado');
                   accesoExistente.provee = proveedorEncontrado;
               }
     
               // Guardar los cambios
               return await this.accesosRepository.save(accesoExistente);
             }

      
      
        async remove(idAccesos: number) {
        const producto = await this.accesosRepository.findOneBy({ idAccesos });
        if (!producto) {
          throw new NotFoundException('Producto no encontrado');
        }
      
        return await this.accesosRepository.remove(producto);
      }
      

}
