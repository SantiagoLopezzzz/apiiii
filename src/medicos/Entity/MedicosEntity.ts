import { especialidades } from "src/especialdades/Entity/EspecialidadesEntity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Medicos {

    @PrimaryGeneratedColumn()
    idmedico:number;

    @Column()
    nombres:string;

    @Column()
    apellidos:string;

    @Column()
    tarjeta_profesional:string;

    @Column()
    telefono:string;

    @Column()
    correo:string;

    @Column()
    estado:boolean;

    @OneToOne(() => especialidades, {onDelete: 'CASCADE', eager:true })
    @JoinColumn({ name: 'fkespecialidad' })
    espec:especialidades;

}