import { IsNumber, IsString } from "@nestjs/class-validator";

export class ProductoDTO{
    @IsString()
    nombreProducto:string
    
    @IsString()
    descripcionProducto:string;

    @IsNumber()
    proveedorFk?:number;
    
}