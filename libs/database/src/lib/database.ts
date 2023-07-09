import { Sequelize, SequelizeOptions } from "sequelize-typescript";
import * as config from "../config.cjs";
import { DbConfig, NodeEnv } from "@member-manager-api/type";
import { Member } from "../models/Member";

const env = process.env['NODE_ENV'] as unknown as NodeEnv | NodeEnv.local
const dbConfig = config as unknown as DbConfig;

const sequelize = new Sequelize(dbConfig[env]);

sequelize.addModels([
    Member
])

export const database = sequelize;