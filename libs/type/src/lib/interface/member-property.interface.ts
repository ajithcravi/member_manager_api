import { Optional } from 'sequelize';
import { Datatype } from '../enum';

export interface MemberPropertyAttributes {
  id: number;
  property: string;
  type: Datatype;
}

export interface MemberPropertyCreationAttributes
  extends Optional<MemberPropertyAttributes, 'id'> {}

export interface PropertyInput {
  propertyId: number;
  value: string;
  unitId: number;
}
