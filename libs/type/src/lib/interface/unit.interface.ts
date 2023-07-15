import { Optional } from 'sequelize';

export interface UnitAttributes {
  id: number;
  unit: string;
}

export interface UnitCreationAttributes
  extends Optional<UnitAttributes, 'id'> {}
