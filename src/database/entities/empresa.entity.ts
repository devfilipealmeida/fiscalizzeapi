import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Empresa {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  nome_fantasia: string;

  @Column()
  cnpj: string;

  @Column()
  regime_tributario: number;

  @Column()
  cep: number;

  @Column()
  logradouro: string;

  @Column()
  numero: number;

  @Column()
  bairro: string;

  @Column()
  municipio: string;

  @Column()
  uf: string;

  @Column({ nullable: true })
  complemento?: string;

  @Column({ nullable: true })
  discrimina_impostos?: boolean;

  @Column({ nullable: true })
  email?: string;

  @Column({ nullable: true })
  enviar_email_destinatario?: boolean;

  @Column({ nullable: true })
  inscricao_estadual?: number;

  @Column({ nullable: true })
  inscricao_municipal?: number;

  @Column({ nullable: true })
  telefone?: string;

  @Column({ nullable: true })
  habilita_nfe?: boolean;

  @Column({ nullable: true })
  habilita_nfce?: boolean;

  @Column('text', { nullable: true })
  arquivo_certificado_base64?: string;

  @Column({ nullable: true })
  senha_certificado?: number;

  @Column({ nullable: true })
  csc_nfce_producao?: string;

  @Column({ nullable: true })
  id_token_nfce_producao?: string;
}
