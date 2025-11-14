import { proveedor } from "src/proveedores/entity/proveedorentity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity()
export class Producto {
    @Column({primary:true, generated:true})
    idProducto:number;

    @Column()
    nombreProducto:string

    @Column()
    descripcionProducto:string;

    @ManyToOne(() => proveedor, {onDelete: 'CASCADE', eager:true })
    provee:proveedor;

    
}