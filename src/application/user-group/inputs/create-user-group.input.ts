import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

import { UserGroupEntity } from '../../../domain/user-group/entities/user-group.entity';

export class CreateUserGroupInput extends UserGroupEntity {
  @MinLength(3, { message: 'Campo precisa ter no mínimo 3 caracteres' })
  @MaxLength(30, { message: 'Campo precisa ter no máximo 30 caracteres' })
  @IsNotEmpty({ message: 'Campo obrigatório' })
  description: string;

  moduleId: number;
}
