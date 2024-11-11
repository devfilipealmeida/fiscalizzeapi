import { ConflictException, Injectable } from '@nestjs/common';
import { CreateEmpresaDto } from 'src/database/dto/create-empresa.dto';
import { UpdateEmpresaDto } from 'src/database/dto/update-empresa.dto';
import { Empresa } from 'src/database/entities/empresa.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EmpresaService {
  constructor(
    @InjectRepository(Empresa) private empresaRepo: Repository<Empresa>,
  ) {}

  async create(createEmpresaDto: CreateEmpresaDto) {
    console.log(createEmpresaDto);

    try {
      const existingEmpresa = await this.empresaRepo.findOne({
        where: [{ cnpj: createEmpresaDto.cnpj }],
      });

      if (existingEmpresa) {
        throw new ConflictException('O CNPJ já está em uso.');
      }

      const novaEmpresa = this.empresaRepo.create(createEmpresaDto);
      return await this.empresaRepo.save(novaEmpresa);
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    return await this.empresaRepo.find();
  }

  async findOne(id: string) {
    const empresa = await this.empresaRepo.findOne({ where: { id } });
    if (!empresa) {
      throw new ConflictException('Empresa não encontrada.');
    }
    return empresa;
  }

  async update(id: string, updateEmpresaDto: UpdateEmpresaDto) {
    const empresa = await this.findOne(id);
    if (!empresa) {
      throw new ConflictException('Empresa não encontrada para atualização.');
    }
    await this.empresaRepo.update({ id }, updateEmpresaDto);
    return this.findOne(id);
  }

  async remove(id: string) {
    const empresa = await this.findOne(id);
    if (!empresa) {
      throw new ConflictException('Empresa não encontrada para remoção.');
    }
    return await this.empresaRepo.delete({ id });
  }
}
