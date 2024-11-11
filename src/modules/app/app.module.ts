import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpresaModule } from '../empresas/empresas.module';
import { databaseConfig } from 'src/config/database.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesPfModule } from '../clientes-pf/clientes-pf.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConfig()),
    EmpresaModule,
    ClientesPfModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
