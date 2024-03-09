import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { CreateUserGroupInput } from '../../../../../application/user-group/inputs';

@Entity('identity_groups')
export class UserGroupModel extends CreateUserGroupInput {
  @PrimaryGeneratedColumn('increment', { name: 'cd_group' })
  public id?: number;

  @PrimaryGeneratedColumn('uuid', { name: 'cd_guid' })
  public guid?: string;

  @Column({ name: 'ds_group', nullable: false, length: 30, unique: true })
  public description: string;

  @CreateDateColumn({
    name: 'dh_created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP()',
  })
  public createdAt: Date;

  @UpdateDateColumn({
    name: 'dh_updated_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP()',
  })
  public updatedAt: Date;

  @DeleteDateColumn({
    name: 'dh_deleted_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP()',
  })
  public deletedAt: Date;
}
