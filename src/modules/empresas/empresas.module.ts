import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpresaService } from './empresas.service';
import { EmpresaController } from './empresas.controller';
import { Empresa } from '../../database/entities/empresa.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Empresa])],
  providers: [EmpresaService],
  controllers: [EmpresaController],
})
export class EmpresaModule {}
