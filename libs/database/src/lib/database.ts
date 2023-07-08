import { Sequelize } from "sequelize-typescript";

export const database = new Sequelize({
  host: process.env['DB_HOST'],
  database: process.env['DB_NAME'],
  port: +process.env['DB_PORT']!,
  dialect: 'postgres',
  username: process.env['DB_USER'],
  password: process.env['DB_PASSWORD'],
  models: [__dirname + '/**/*.model.ts']
})