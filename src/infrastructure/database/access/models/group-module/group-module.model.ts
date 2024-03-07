import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('identity_groups_modules')
export class GroupModuleModel {
  @PrimaryGeneratedColumn('increment', { name: 'cd_group_module' })
  public id?: number;

  @Column({
    name: 'cd_group_guid',
    type: 'uuid',
    nullable: false,
  })
  public groupId: string;

  @Column({
    name: 'cd_module_guid',
    type: 'uuid',
    nullable: false,
  })
  public moduleId: string;
}
