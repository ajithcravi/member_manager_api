import { Optional } from 'sequelize';

export interface MemberPropertyMapAttributes {
  id: number;
  memberId: number;
  propertyId: number;
  value: string;
  unitId: number;
}

export interface MemberPropertyMapCreationAttributes
  extends Optional<MemberPropertyMapAttributes, 'id'> {}
