/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateClientesPfDto {
  id: string;

  @IsString({ message: "O nome deve ser uma string." })
  @MaxLength(255, { message: "O nome deve ter no máximo 255 caracteres." })
  @MinLength(1, { message: "O nome deve ter pelo menos 1 caractere." })
  @IsNotEmpty({ message: "O nome é obrigatório." })
  nome: string;

  @IsString({ message: "O documento deve ser uma string." })
  @IsNotEmpty({ message: "O documento é obrigatório." })
  documento: string;

  @IsEmail({}, { message: "O e-mail deve ser um endereço de e-mail válido." })
  @IsNotEmpty({ message: "O e-mail é obrigatório." })
  email: string;

  @IsString({ message: "O telefone deve ser uma string." })
  @MaxLength(20, { message: "O telefone deve ter no máximo 20 caracteres." })
  @IsOptional()
  telefone?: string;

  @IsString({ message: "O celular deve ser uma string." })
  @MaxLength(20, { message: "O celular deve ter no máximo 20 caracteres." })
  @IsNotEmpty({ message: "O celular é obrigatório." })
  celular: string;

  @IsString({ message: "O CEP deve ser uma string." })
  @IsNotEmpty({ message: "O CEP é obrigatório." })
  cep: string;

  @IsString({ message: "O logradouro deve ser uma string." })
  @MaxLength(255, { message: "O logradouro deve ter no máximo 255 caracteres." })
  @IsNotEmpty({ message: "O logradouro é obrigatório." })
  logradouro: string;

  @IsString({ message: "O número deve ser um valor numérico." })
  @IsNotEmpty({ message: "O número é obrigatório." })
  numero: string;

  @IsString({ message: "O bairro deve ser uma string." })
  @MaxLength(255, { message: "O bairro deve ter no máximo 255 caracteres." })
  @IsNotEmpty({ message: "O bairro é obrigatório." })
  bairro: string;

  @IsString({ message: "O município deve ser uma string." })
  @MaxLength(255, { message: "O município deve ter no máximo 255 caracteres." })
  @IsNotEmpty({ message: "O município é obrigatório." })
  municipio: string;

  @IsString({ message: "A UF deve ser uma string." })
  @MaxLength(2, { message: "A UF deve ter exatamente 2 caracteres." })
  @IsNotEmpty({ message: "A UF é obrigatória." })
  uf: string;

  @IsString({ message: "O complemento deve ser uma string." })
  @MaxLength(255, { message: "O complemento deve ter no máximo 255 caracteres." })
  @IsOptional()
  complemento?: string;
}
