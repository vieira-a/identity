import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { CreateUserGroupInput } from '../../../../../application/user-group/inputs/create-user-group.input';
import { SystemModule } from '../system-module/system-module.model';

@Entity('identity_groups')
export class UserGroupModel extends CreateUserGroupInput {
  @PrimaryGeneratedColumn('increment', { name: 'cd_group' })
  public id?: number;

  @PrimaryGeneratedColumn('uuid', { name: 'cd_guid' })
  public guid?: string;

  @Column({ name: 'ds_group', nullable: false, length: 30 })
  public description: string;

  @Column({ name: 'cd_module_id', nullable: false })
  public moduleId: number;

  @OneToMany(() => SystemModule, (module) => module.moduleId)
  public modules: SystemModule[];

  @CreateDateColumn({
    name: 'dh_created_at',
    type: 'timestamp',
    transformer: {
      to: (value: Date) => value,
      from: (value: string) => new Date(value).toLocaleDateString('pt-br'),
    },
  })
  public createdAt: Date;

  @UpdateDateColumn({
    name: 'dh_updated_at',
    type: 'timestamp',
    transformer: {
      to: (value: Date) => value,
      from: (value: string) => new Date(value).toLocaleDateString('pt-br'),
    },
  })
  public updatedAt: Date;

  @DeleteDateColumn({
    name: 'dh_deleted_at',
    type: 'timestamp',
    transformer: {
      to: (value: Date) => value,
      from: (value: string) => new Date(value).toLocaleDateString('pt-br'),
    },
  })
  public deletedAt: Date;
}
