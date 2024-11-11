import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ClientesPf {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  documento: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  telefone?: string;

  @Column()
  celular: string;

  @Column()
  cep: string;

  @Column()
  logradouro: string;

  @Column({ default: 'S/N' })
  numero: string;

  @Column()
  bairro: string;

  @Column()
  municipio: string;

  @Column()
  uf: string;

  @Column({ nullable: true })
  complemento?: string;
}
