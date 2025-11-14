import { proveedor } from "src/proveedores/entity/proveedorentity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";

@Entity()
export class Accesos {

    @Column({primary:true, generated:true})
    idAccesos:number;

    @Column()
    Correo:string

    @Column()
    password:string;

    @OneToOne(() => proveedor, {onDelete: 'CASCADE', eager:true })
    @JoinColumn({ name: 'provee' })
    provee:proveedor;

    
}