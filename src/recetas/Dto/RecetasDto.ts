import { IsString } from "@nestjs/class-validator";

export class recetasDto {
    @IsString()
    medicamento:string
    
    @IsString()
    dosis:string;
    
    @IsString()
    frecuencia:string;
    
    @IsString()
    duracion:string;
    
    @IsString()
    estado:boolean;

    @IsString()
    hist_clini?:number;
}