import { MemberAttributes, MemberCreationAttributes } from "@member-manager-api/type";
import { Column, Model, PrimaryKey, Table, Unique, UpdatedAt } from "sequelize-typescript";

@Table({
    name: {
        singular: 'Member',
        plural: 'Members'
    },
    timestamps: true,
    paranoid: true,
    freezeTableName: true
})
export class Member extends Model<MemberAttributes, MemberCreationAttributes>{

    @PrimaryKey
    @Column
    name!: string;
    
    @PrimaryKey
    @Column
    mobile!: string
}