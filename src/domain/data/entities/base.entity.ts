export class EntityBase {
  id?: number;

  guid?: string;

  createdAt?: Date;

  updatedAt?: Date;

  deletedAt?: Date;

  protected constructor() {}
}
