import { Dialect } from "sequelize";
import { NodeEnv } from "../enum"

export type Environment = {
    NODE_ENV: NodeEnv;
    DB_HOST: string;
    DB_PORT: number;
    DB_NAME: string;
    DB_DIALECT: Dialect;
    DB_USER: string;
    DB_PASSWORD: string;
}