import {
  ArrayNotEmpty,
  IsNotEmpty,
  IsUUID,
  MaxLength,
  MinLength,
} from 'class-validator';

import { UserGroupEntity } from '../../../domain/user-group/entities';

export class CreateUserGroupInput extends UserGroupEntity {
  @MinLength(3, { message: 'Campo precisa ter no mínimo 3 caracteres' })
  @MaxLength(30, { message: 'Campo precisa ter no máximo 30 caracteres' })
  @IsNotEmpty({ message: 'Campo obrigatório' })
  description: string;

  @IsUUID(4, { each: true, message: 'Código do grupo com formato inválido' })
  @ArrayNotEmpty({ message: 'Pelo menos um módulo é obrigatório' })
  modules: string[];
}
