import { MemberPropertyAttributes, MemberPropertyCreationalAttributes } from "@member-manager-api/type";
import { AllowNull, Column, DataType, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { MemberPropertyMap } from "./MemberPropertyMap";

export enum Datatype {
    'Text'='Text',
    'Number'='Number',
    'Date'='Date',
    'Time'='Time',
    'Array'='Array'
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
export class MemberProperty extends Model<MemberPropertyAttributes, MemberPropertyCreationalAttributes>{
    @PrimaryKey
    @Column
    property!: string;

    @PrimaryKey
    @AllowNull
    @Column({type: DataType.ENUM(...Object.values(Datatype))})
    type!: Datatype;

    @HasMany(() => MemberPropertyMap)
    memberProperties!: MemberPropertyMap[];
}