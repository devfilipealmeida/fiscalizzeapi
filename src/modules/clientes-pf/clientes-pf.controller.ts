import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ClientesPfService } from './clientes-pf.service';
import { CreateClientesPfDto } from '../../database/dto/create-clientes-pf.dto';
import { UpdateClientesPfDto } from 'src/database/dto/update-clientes-pf.dto';

@Controller('clientes-pf')
export class ClientesPfController {
  constructor(private readonly clientesPfService: ClientesPfService) {}

  @Post()
  create(@Body() createClientesPfDto: CreateClientesPfDto) {
    return this.clientesPfService.create(createClientesPfDto);
  }

  @Get()
  findAll() {
    return this.clientesPfService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientesPfService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateClientesPfDto: UpdateClientesPfDto,
  ) {
    return this.clientesPfService.update(id, updateClientesPfDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientesPfService.remove(id);
  }
}
