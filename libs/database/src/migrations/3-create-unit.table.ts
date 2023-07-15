import { QueryInterface, Sequelize, Transaction } from 'sequelize';
import { tablename } from '../constants';
import { DataType } from 'sequelize-typescript';
import { database } from '../lib/database';

const table: string = tablename.unit;
const indexName: string = 'Idx_Unit_Unit';
const indexAttributes: string[] = ['unit'];

module.exports = {
  up: async (querInterface: QueryInterface) => {
    const transaction: Transaction = await database.transaction();
    try {
      await querInterface.createTable(
        table,
        {
          id: {
            type: DataType.INTEGER,
            unique: true,
            autoIncrement: true
          },
          unit: {
            type: DataType.STRING,
            primaryKey: true
          },
          createdAt: {
            type: DataType.DATE
          },
          updatedAt: {
            type: DataType.DATE
          },
          deletedAt: {
            type: DataType.DATE
          }
        },
        { transaction }
      );

      await querInterface.addIndex(table, indexAttributes, {
        name: indexName,
        transaction
      });

      await transaction.commit();
    } catch (error) {
      console.error(error);
      await transaction.rollback();
    }
  },
  down: async (querInterface: QueryInterface) => {
    const transaction: Transaction = await database.transaction();
    try {
      await querInterface.removeIndex(table, indexName, {
        transaction
      });

      await querInterface.dropTable(table, { transaction });

      await transaction.commit();
    } catch (error) {
      console.error(error);
      await transaction.rollback();
    }
  }
};
