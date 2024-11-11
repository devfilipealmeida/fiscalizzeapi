import { Module } from '@nestjs/common';
import { ClientesPfService } from './clientes-pf.service';
import { ClientesPfController } from './clientes-pf.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientesPf } from 'src/database/entities/clientes-pf.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ClientesPf])],
  controllers: [ClientesPfController],
  providers: [ClientesPfService],
})
export class ClientesPfModule {}
