import { IsNotEmpty } from 'class-validator';

import { GroupModuleEntity } from '../../../domain/group-module/entities/group-module.entity';

export class AssignGroupModuleInput extends GroupModuleEntity {
  @IsNotEmpty({ message: 'ID do grupo é obrigatório' })
  public groupId: string;

  @IsNotEmpty({ message: 'ID do módulo é obrigatório' })
  public moduleId: string;
}
