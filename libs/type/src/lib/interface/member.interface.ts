import { Optional } from "sequelize";

export interface MemberAttributes {
    id: number;
    name: string;
    mobile: string;
}

export interface MemberCreationAttributes extends Optional<MemberAttributes, 'id'>{}