import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ClientesPf } from 'src/database/entities/clientes-pf.entity';
import { Empresa } from 'src/database/entities/empresa.entity';

export const databaseConfig = (): TypeOrmModuleOptions => ({
  type: 'postgres',
  url: 'postgresql://admin:1234567@localhost:5432/notalizze_db',
  entities: [Empresa, ClientesPf],
  autoLoadEntities: true,
  synchronize: true,
});
