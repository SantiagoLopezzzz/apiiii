import { Column, Entity } from "typeorm";

@Entity()
export class proveedor {
    @Column({primary:true, generated:true})
    idproveedor:number;

    @Column()
    nombre:string

    @Column()
    telefono:string;
}