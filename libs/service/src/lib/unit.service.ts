import { Unit, database } from '@member-manager-api/database';
import { UnitCreationAttributes } from '@member-manager-api/type';

export class UnitService {
  private _repo = database.getRepository(Unit);

  createUnit(input: UnitCreationAttributes): Promise<Unit> {
    return this._repo.create(input);
  }

  getUnit(input: UnitCreationAttributes): Promise<Unit | null> {
    return this._repo.findOne({
      where: {
        unit: input.unit
      }
    });
  }
}
