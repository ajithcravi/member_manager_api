import { Sequelize } from 'sequelize-typescript';
import * as config from '../config.cjs';
import { DbConfig, NodeEnv } from '@member-manager-api/type';
import { Member, MemberProperty, MemberPropertyMap, Unit } from '../models';

const env = process.env['NODE_ENV'] as unknown as NodeEnv | NodeEnv.local;
const dbConfig = config as unknown as DbConfig;

const sequelize = new Sequelize(dbConfig[env]);

sequelize.addModels([Member, MemberProperty, MemberPropertyMap, Unit]);

export const database = sequelize;
