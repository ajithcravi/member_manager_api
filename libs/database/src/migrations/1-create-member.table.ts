import { QueryInterface, Sequelize, Transaction } from 'sequelize';
import { tablename } from '../constants';
import { DataType } from 'sequelize-typescript';
import { database } from '../lib/database';

const table: string = tablename.member;
const indexName: string = 'Idx_Member_Name_Mobile';
const indexAttributes: string[] = ['name', 'mobile'];
const uniqueFields: string[] = ['name', 'mobile'];

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
          name: {
            type: DataType.STRING,
            primaryKey: true
          },
          mobile: {
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
        {
          uniqueKeys: {
            Member_UK: {
              fields: uniqueFields
            }
          },
          transaction
        }
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

      await querInterface.removeConstraint(table, 'Member_UK', { transaction });

      await querInterface.dropTable(table, { transaction });

      await transaction.commit();
    } catch (error) {
      console.error(error);
      await transaction.rollback();
    }
  }
};
