import { MemberProperty, database } from '@member-manager-api/database';
import { MemberPropertyCreationAttributes } from '@member-manager-api/type';
import { Sequelize, Repository } from 'sequelize-typescript';

export class MemberPropertyService {
  constructor(
    private _database: Sequelize,
    private _repo: Repository<MemberProperty>
  ) {
    this._database = database;
    this._repo = this._database.getRepository(MemberProperty);
  }

  createMemberProperty(
    input: MemberPropertyCreationAttributes
  ): Promise<MemberProperty> {
    return this._repo.create(input);
  }
}
