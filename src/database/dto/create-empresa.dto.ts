/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsOptional, IsString, IsBoolean, IsNumber, MaxLength, MinLength } from "class-validator";

export class CreateEmpresaDto {
  id: string;

  @IsString()
  @MaxLength(255)
  @MinLength(1)
  @IsNotEmpty()
  nome: string;

  @IsString()
  @MaxLength(255)
  @MinLength(1)
  @IsNotEmpty()
  nome_fantasia: string;

  @IsString()
  @MinLength(14)
  @MaxLength(15)
  @IsNotEmpty()
  cnpj: string;

  @IsNumber()
  @IsNotEmpty()
  regime_tributario: number;

  @IsNumber()
  @IsNotEmpty()
  cep: number;

  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  logradouro: string;

  @IsNumber()
  @IsNotEmpty()
  numero: number;

  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  bairro: string;

  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  municipio: string;

  @IsString()
  @MaxLength(2)
  @IsNotEmpty()
  uf: string;

  @IsString()
  @MaxLength(255)
  @IsOptional()
  complemento?: string;

  @IsBoolean()
  @IsOptional()
  discrimina_impostos?: boolean;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsBoolean()
  @IsOptional()
  enviar_email_destinatario?: boolean;

  @IsNumber()
  @IsOptional()
  inscricao_estadual?: number;

  @IsNumber()
  @IsOptional()
  inscricao_municipal?: number;

  @IsString()
  @MaxLength(20)
  @IsOptional()
  telefone?: string;

  @IsBoolean()
  @IsOptional()
  habilita_nfe?: boolean;

  @IsBoolean()
  @IsOptional()
  habilita_nfce?: boolean;

  @IsString()
  @IsOptional()
  arquivo_certificado_base64?: string;

  @IsNumber()
  @IsOptional()
  senha_certificado?: number;

  @IsString()
  @MaxLength(255)
  @IsOptional()
  csc_nfce_producao?: string;

  @IsString()
  @MaxLength(255)
  @IsOptional()
  id_token_nfce_producao?: string;
}
