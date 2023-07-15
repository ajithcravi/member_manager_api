import {
  MemberAttributes,
  MemberCreationAttributes
} from '@member-manager-api/type';
import {
  AutoIncrement,
  Column,
  HasMany,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript';
import { MemberPropertyMap } from './MemberPropertyMap';

@Table({
  name: {
    singular: 'Member',
    plural: 'Members'
  },
  timestamps: true,
  paranoid: true,
  freezeTableName: true
})
export class Member extends Model<MemberAttributes, MemberCreationAttributes> {
  @PrimaryKey
  @Column
  name!: string;

  @PrimaryKey
  @Column
  mobile!: string;

  @HasMany(() => MemberPropertyMap)
  property!: MemberPropertyMap[];
}
