import {
  Member,
  MemberProperty,
  MemberPropertyMap,
  database
} from '@member-manager-api/database';
import {
  MemberCreationAttributes,
  MemberPropertyAttributes,
  MemberPropertyMapCreationAttributes,
  PropertyInput
} from '@member-manager-api/type';
import { Sequelize, Repository } from 'sequelize-typescript';

export class MemberService {
  constructor(
    private _database: Sequelize,
    private _memberRepo: Repository<Member>,
    private _memberPropRepo: Repository<MemberPropertyMap>
  ) {
    this._database = database;
    this._memberRepo = this._database.getRepository(Member);
    this._memberPropRepo = this._database.getRepository(MemberPropertyMap);
  }

  async createMember(
    memberInput: MemberCreationAttributes,
    propertyInput: PropertyInput[]
  ): Promise<Member | null> {
    const transaction = await this._database.transaction();
    try {
      const member: Member = await this._memberRepo.create(memberInput, {
        transaction
      });

      const propInput: MemberPropertyMapCreationAttributes[] =
        propertyInput.map((ppt) => {
          return {
            memberId: member.id,
            propertyId: ppt.propertyId,
            value: ppt.value,
            unitId: ppt.unitId
          };
        });

      const properties: MemberPropertyMap[] =
        await this._memberPropRepo.bulkCreate(propInput, { transaction });

      return member;
    } catch (error) {
      console.error('Error creating a member\n', error);
      await transaction.rollback();
      return null;
    }
  }
}
