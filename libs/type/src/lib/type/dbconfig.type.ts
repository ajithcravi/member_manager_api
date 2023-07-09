import { SequelizeOptions } from "sequelize-typescript"
import { NodeEnv } from "../enum"

export type DbConfig = {
    [key in NodeEnv]: SequelizeOptions
}