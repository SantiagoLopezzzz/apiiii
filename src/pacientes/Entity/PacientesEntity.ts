import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class pacientes {
    @PrimaryGeneratedColumn()
    idpaciente:number;

    @Column()
    tipo_doc:number;

    @Column()
    numero_doc:string;

    @Column()
    nombres:string;

    @Column()
    apellidos:string;

    @Column(({type: 'date'}))
    fecha_nacimiento:Date;

    @Column()
    telefono:string;

    @Column()
    correo:string;
}