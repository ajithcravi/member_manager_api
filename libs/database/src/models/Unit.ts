import { UnitAttributes, UnitCreationalAttributes } from "@member-manager-api/type";
import { Column, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table({
    name: {
        singular: 'Unit',
        plural: 'Units'
    },
    timestamps: true,
    paranoid: true,
    freezeTableName: true
})
export class Unit extends Model<UnitAttributes, UnitCreationalAttributes>{
    @PrimaryKey
    @Column
    unit!: string
}