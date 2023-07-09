import { Model, Table } from "sequelize-typescript";
import { IntegratorAttributes, IntegratorCreationAttributes } from "@member-manager-api/type";

@Table({
    timestamps: true,
    paranoid: true
})
export class Integrator extends Model<IntegratorAttributes, IntegratorCreationAttributes>{}