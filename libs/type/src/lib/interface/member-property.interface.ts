import { Optional } from "sequelize";

export interface MemberPropertyAttributes {
    id: number;
    property: string;
    type: string | null;
}

export interface MemberPropertyCreationalAttributes extends Optional<MemberPropertyAttributes, 'id'>{}