import {
  UnitAttributes,
  UnitCreationAttributes
} from '@member-manager-api/type';
import {
  BelongsToMany,
  Column,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript';
import { MemberProperty } from './MemberProperty';
import { MemberPropertyMap } from './MemberPropertyMap';

@Table({
  name: {
    singular: 'Unit',
    plural: 'Units'
  },
  timestamps: true,
  paranoid: true,
  freezeTableName: true
})
export class Unit extends Model<UnitAttributes, UnitCreationAttributes> {
  @PrimaryKey
  @Column
  unit!: string;

  @BelongsToMany(() => MemberProperty, () => MemberPropertyMap)
  property!: MemberProperty[];
}
