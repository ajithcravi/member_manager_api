import {
  MemberPropertyAttributes,
  MemberPropertyCreationAttributes
} from '@member-manager-api/type';
import {
  AllowNull,
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript';
import { MemberPropertyMap } from './MemberPropertyMap';
import { Unit } from './Unit';

export enum Datatype {
  'Text' = 'Text',
  'Number' = 'Number',
  'Date' = 'Date',
  'Time' = 'Time',
  'Array' = 'Array',
  'DateTime' = 'DateTime'
}

@Table({
  name: {
    singular: 'MemberProperty',
    plural: 'MemberProperties'
  },
  timestamps: true,
  paranoid: true,
  freezeTableName: true
})
export class MemberProperty extends Model<
  MemberPropertyAttributes,
  MemberPropertyCreationAttributes
> {
  @PrimaryKey
  @Column
  property!: string;

  @PrimaryKey
  @AllowNull
  @Column({ type: DataType.ENUM(...Object.values(Datatype)) })
  type!: Datatype;

  @HasMany(() => MemberPropertyMap)
  memberProperties!: MemberPropertyMap[];

  @BelongsToMany(() => Unit, () => MemberPropertyMap)
  units!: Unit;
}
