import { QueryInterface, Transaction } from 'sequelize';
import { tablename } from '../constants';
import { DataType } from 'sequelize-typescript';
import { database } from '../lib/database';
import { Datatype } from '../models';

const table: string = tablename.memberProperty;
const indexName: string = 'Idx_Member_Property_Property_Type';
const indexAttributes: string[] = ['property', 'type'];
const uniqueFields: string[] = ['property', 'type'];

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
          property: {
            type: DataType.STRING,
            primaryKey: true
          },
          type: {
            type: DataType.ENUM(...Object.values(Datatype)),
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
            MemberProperty_UK: {
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

      await querInterface.removeConstraint(table, 'MemberProperty_UK', {
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
