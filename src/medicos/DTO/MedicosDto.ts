import { especialidades } from 'src/especialdades/Entity/EspecialidadesEntity';
import { IsString } from "@nestjs/class-validator";

export class MedicosDto {
    @IsString()
    nombres:string;
    
    @IsString()
    apellidos:string;
    
    @IsString()
    tarjeta_profesional:string
    
    @IsString()
    telefono:string;
    
    @IsString()
    correo:string;
    
    @IsString()
    tipo_doc:number;
    
    @IsString()
    estado:boolean;

    @IsString()
    espec?:number;
}