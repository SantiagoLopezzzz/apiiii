import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { proveedor } from './proveedores/entity/proveedorentity';
import { ProveedoresModule } from './proveedores/proveedores.module';
import { AppService } from './app.service';
import { Producto } from './productos/Entity/productoEntity';
import { ProductosModule } from './productos/productos.module';
import { AccesosModule } from './accesos/accesos.module';
import { Accesos } from './accesos/Entity/accesosEntity';
import { EspecialdadesModule } from './especialdades/especialdades.module';
import { PacientesModule } from './pacientes/pacientes.module';
import { MedicosModule } from './medicos/medicos.module';
import { HistoriasClinicasModule } from './historias_clinicas/historias_clinicas.module';
import { RecetasModule } from './recetas/recetas.module';
import { CitasModule } from './citas/citas.module';
import { especialidades } from './especialdades/Entity/EspecialidadesEntity';
import { pacientes } from './pacientes/Entity/PacientesEntity';
import { Medicos} from './medicos/Entity/MedicosEntity';
import { historias_clinicas } from './historias_clinicas/Entity/Historias_ClinicasEntity';
import { recetas } from './recetas/Entity/RecetasEntity';
import { citas } from './citas/Entity/CitasEntity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'user_java',
      password: '123456',
      database: 'db_proyectoClase',
      entities:[especialidades, pacientes, Medicos, historias_clinicas, recetas, citas],
      synchronize: true,
      autoLoadEntities: true, // Opcional, útil para registrar entidades automáticamente
    }),
    ProveedoresModule,
    ProductosModule,
    AccesosModule,
    EspecialdadesModule,
    PacientesModule,
    MedicosModule,
    HistoriasClinicasModule,
    RecetasModule,
    CitasModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
