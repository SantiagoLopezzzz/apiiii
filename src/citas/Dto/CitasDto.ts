import { CitasController } from './../citas.controller';
import { IsString } from "@nestjs/class-validator";

export class CitasDto {
    @IsString()
    fecha:Date;
    
    @IsString()
    motivo:string
    
    @IsString()
    estado:String;
    
    @IsString()
    estado_registro:boolean;

    @IsString()
    medi?:number;

    @IsString()
    paci?:number;

    @IsString()
    histo_cli?:number;

}