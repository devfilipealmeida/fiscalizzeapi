import { ConflictException, Injectable } from '@nestjs/common';
import { CreateClientesPfDto } from 'src/database/dto/create-clientes-pf.dto';
import { UpdateClientesPfDto } from 'src/database/dto/update-clientes-pf.dto';
import { ClientesPf } from 'src/database/entities/clientes-pf.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ClientesPfService {
  constructor(
    @InjectRepository(ClientesPf)
    private clientesPfRepo: Repository<ClientesPf>,
  ) {}

  async create(createClientesPfDto: CreateClientesPfDto) {
    console.log(createClientesPfDto);

    try {
      const existingEmpresa = await this.clientesPfRepo.findOne({
        where: [{ documento: createClientesPfDto.documento }],
      });

      if (existingEmpresa) {
        throw new ConflictException('O documento já está em uso.');
      }

      const novaEmpresa = this.clientesPfRepo.create(createClientesPfDto);
      return await this.clientesPfRepo.save(novaEmpresa);
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    return await this.clientesPfRepo.find();
  }

  async findOne(id: string) {
    const empresa = await this.clientesPfRepo.findOne({ where: { id } });
    if (!empresa) {
      throw new ConflictException('Cliente não encontrado.');
    }
    return empresa;
  }

  async update(id: string, updateClientesPfDto: UpdateClientesPfDto) {
    const empresa = await this.findOne(id);
    if (!empresa) {
      throw new ConflictException('Cliente não encontrada para atualização.');
    }
    await this.clientesPfRepo.update({ id }, updateClientesPfDto);
    return this.findOne(id);
  }

  async remove(id: string) {
    const empresa = await this.findOne(id);
    if (!empresa) {
      throw new ConflictException('Empresa não encontrada para remoção.');
    }
    return await this.clientesPfRepo.delete({ id });
  }
}
