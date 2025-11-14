import { ProductoDTO } from './DTO/ProductoDTO';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Producto } from './Entity/productoEntity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { proveedor } from 'src/proveedores/entity/proveedorentity';
import { NOTFOUND } from 'dns';

@Injectable()
export class ProductosService {

    constructor(
    @InjectRepository(Producto)
        private readonly productoRepository: Repository<Producto>,
    @InjectRepository(proveedor)    
        private readonly proveedorRepository: Repository<proveedor>
      ) {}


      async findAll(){
        return await this.productoRepository.find();
    }
    
    async findOne(idProducto:number){
        return await this.productoRepository.findOneBy({idProducto});
    }
    
    async create(createProducto: ProductoDTO){
        const provee = await this.proveedorRepository.findOneBy({
          idproveedor:createProducto.proveedorFk
        });
        if (!provee)throw new NotFoundException('Proveedor no enconteado') 
          
          const nuevo = this.productoRepository.create(
            {
              nombreProducto: createProducto.nombreProducto,
              descripcionProducto : createProducto.descripcionProducto,
              provee

            }
          );
          return this.productoRepository.save(nuevo);
      }

  async update(idProducto: number, updateProducto: ProductoDTO) {
  const productoExistente = await this.productoRepository.findOneBy({ idProducto });
  if (!productoExistente) {
    throw new NotFoundException('Producto no encontrado');
  }
  let proveedor = productoExistente.provee;
  if (updateProducto.proveedorFk) {
    proveedor = await this.proveedorRepository.findOneBy({ idproveedor: updateProducto.proveedorFk });
    if (!proveedor) {
      throw new NotFoundException('Proveedor no encontrado');
    }
  }
  productoExistente.nombreProducto = updateProducto.nombreProducto ?? productoExistente.nombreProducto;
  productoExistente.descripcionProducto = updateProducto.descripcionProducto ?? productoExistente.descripcionProducto;
  productoExistente.provee = proveedor;
  return await this.productoRepository.save(productoExistente);
}


  async remove(idProducto: number) {
  const producto = await this.productoRepository.findOneBy({ idProducto });
  if (!producto) {
    throw new NotFoundException('Producto no encontrado');
  }

  return await this.productoRepository.remove(producto);
}



      
      
    
}
