import { Optional } from 'sequelize';

export interface MemberPropertyAttributes {
  id: number;
  property: string;
  type: string | null;
}

export interface MemberPropertyCreationAttributes
  extends Optional<MemberPropertyAttributes, 'id'> {}

export interface PropertyInput {
  propertyId: number;
  value: string;
  unitId: number;
}
