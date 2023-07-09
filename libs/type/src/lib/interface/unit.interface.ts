import { Optional } from "sequelize";

export interface UnitAttributes {
    id: number;
    unit: string;
}

export interface UnitCreationalAttributes extends Optional<UnitAttributes, 'id'>{}