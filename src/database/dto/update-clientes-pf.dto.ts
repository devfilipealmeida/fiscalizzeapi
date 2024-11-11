import { PartialType } from '@nestjs/mapped-types';
import { CreateClientesPfDto } from './create-clientes-pf.dto';

export class UpdateClientesPfDto extends PartialType(CreateClientesPfDto) {}
