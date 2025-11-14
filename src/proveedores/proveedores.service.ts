import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'; // ← FALTA ESTE IMPORTANTE
import { proveedor } from './entity/proveedorentity';

@Injectable()
export class ProveedoresService {
  constructor(
    @InjectRepository(proveedor)
    private readonly proveedorRepository: Repository<proveedor>,
  ) {}
  async findAll(){
    return await this.proveedorRepository.find();
  }

  async findOne(idproveedor:number){
    return await this.proveedorRepository.findOneBy({idproveedor});
  }

  async create(createProveedor: proveedor){
    const prov = this.proveedorRepository.create(createProveedor);
    return await this.proveedorRepository.save(prov);
  }

  async update(id: number, updateProveedor: proveedor){
    return await this.proveedorRepository.update(id, updateProveedor);
  }

  async remove(idproveedor: number){
    return await this.proveedorRepository.softDelete(idproveedor);
  }

}
