import { Unit, database } from '@member-manager-api/database';
import { UnitCreationAttributes } from '@member-manager-api/type';
import { Repository, Sequelize } from 'sequelize-typescript';

export class UnitService {
  private _repo = database.getRepository(Unit);

  createUnit(input: UnitCreationAttributes): Promise<Unit> {
    return this._repo.create(input);
  }
}
