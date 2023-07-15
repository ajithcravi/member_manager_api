import {
  MemberPropertyMapAttributes,
  MemberPropertyMapCreationAttributes
} from '@member-manager-api/type';
import {
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript';
import { Member } from './Member';
import { MemberProperty } from './MemberProperty';
import { Unit } from './Unit';

@Table({
  name: {
    singular: 'MemberPropertyMap',
    plural: 'MemberPropertyMaps'
  },
  timestamps: true,
  paranoid: true,
  freezeTableName: true
})
export class MemberPropertyMap extends Model<
  MemberPropertyMapAttributes,
  MemberPropertyMapCreationAttributes
> {
  @PrimaryKey
  @ForeignKey(() => Member)
  @Column
  memberId!: number;

  @PrimaryKey
  @ForeignKey(() => MemberProperty)
  @Column
  propertyId!: number;

  @Column
  value!: string;

  @ForeignKey(() => Unit)
  @Column
  unitId!: string;
}
