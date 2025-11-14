import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class especialidades {
    @PrimaryGeneratedColumn()
    idespecialidad:number;

    @Column()
    nombre:string

    @Column()
    descripcion:string;

    @Column()
    estado:boolean;
}