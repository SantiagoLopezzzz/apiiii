import { historias_clinicas } from "src/historias_clinicas/Entity/Historias_ClinicasEntity";
import { Medicos } from "src/medicos/Entity/MedicosEntity";
import { pacientes } from "src/pacientes/Entity/PacientesEntity";
import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class citas {
    @PrimaryGeneratedColumn()
    idcita:number;

    @Column(({type: 'date'}))
    fecha:Date;

    @Column()
    motivo:string

    @Column()
    estado:String;

    @Column()
    estado_registro:boolean;
    
    @ManyToOne(() => Medicos, {onDelete: 'CASCADE', eager:true })
    medi:Medicos;

    @ManyToOne(() => pacientes, {onDelete: 'CASCADE', eager:true })
    paci:pacientes;

    @ManyToOne(() => historias_clinicas, {onDelete: 'CASCADE', eager:true })
    histo_cli:historias_clinicas;

    
}