import { Optional } from "sequelize";

export interface IntegratorAttributes {
    id: number,
    username: string,
    displayName: string
}

export interface IntegratorCreationAttributes extends Optional<IntegratorAttributes, 'id'>{}