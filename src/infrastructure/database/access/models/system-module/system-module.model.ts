import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('system_modules')
export class SystemModuleModel {
  @PrimaryGeneratedColumn('increment', { name: 'cd_module' })
  public id?: number;

  @PrimaryGeneratedColumn('uuid', { name: 'cd_guid' })
  public guid: string;

  @Column({ name: 'ds_module', nullable: false, length: 255 })
  public description: string;
}
