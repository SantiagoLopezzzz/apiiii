import { historias_clinicas } from "src/historias_clinicas/Entity/Historias_ClinicasEntity";
import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class recetas {
    @PrimaryGeneratedColumn()
    idreceta:number;

    @Column()
    medicamento:string

    @Column()
    dosis:string;

    @Column()
    frecuencia:string;

    @Column()
    duracion:string;

    @Column()
    estado:boolean;

    @ManyToOne(() => historias_clinicas, {onDelete: 'CASCADE', eager:true })
    hist_clini:historias_clinicas;
    
}