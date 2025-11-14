import { IsString } from "@nestjs/class-validator";

export class AccesosDto {
    @IsString()
    Correo:string

    @IsString()    
    password:string;

    @IsString()
    proveedorFk?:number;

}