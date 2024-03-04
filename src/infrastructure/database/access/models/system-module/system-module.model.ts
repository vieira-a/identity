import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { UserGroupModel } from '../user-group/user-group.model';

@Entity('system_modules')
export class SystemModule {
  @PrimaryGeneratedColumn('increment', { name: 'cd_module' })
  public id?: number;

  @PrimaryGeneratedColumn('uuid', { name: 'cd_guid' })
  public guid: string;

  @Column({ name: 'ds_module', nullable: false, length: 255 })
  public description: string;

  @ManyToOne(() => UserGroupModel, (group) => group.modules)
  @JoinColumn({ name: 'cd_group' })
  public moduleId: number;
}
