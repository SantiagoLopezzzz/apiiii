import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class historias_clinicas {
    @PrimaryGeneratedColumn()
    idhistoria:number;

    @Column()
    diagnostico:string;

    @Column()
    tratamiento:string;

    @Column()
    observaciones:string;

    @Column(({type: 'date'}))
    fecha_registro:Date;

    @Column()
    estado:boolean;
    
}