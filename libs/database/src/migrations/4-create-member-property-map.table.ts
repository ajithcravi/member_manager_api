import { QueryInterface, Sequelize, Transaction } from 'sequelize';
import { tablename } from '../constants';
import { DataType } from 'sequelize-typescript';
import { database } from '../lib/database';

const table: string = tablename.memberPropertyMap;
const indexName: string = 'Idx_MemberPropertyMap_Member_Property';
const indexAttributes: string[] = ['memberId', 'propertyId'];
const uniqueFields: string[] = ['memberId', 'propertyId'];

module.exports = {
  up: async (querInterface: QueryInterface) => {
    const transaction: Transaction = await database.transaction();
    try {
      await querInterface.createTable(
        table,
        {
          id: {
            type: DataType.INTEGER,
            autoIncrement: true,
            unique: true,
            primaryKey: true
          },
          memberId: {
            type: DataType.INTEGER,
            references: {
              model: {
                tableName: tablename.member
              },
              key: 'id'
            }
          },
          propertyId: {
            type: DataType.INTEGER,
            references: {
              model: {
                tableName: tablename.memberProperty
              },
              key: 'id'
            }
          },
          value: {
            type: DataType.STRING
          },
          unitId: {
            type: DataType.INTEGER,
            references: {
              model: {
                tableName: tablename.unit
              },
              key: 'id'
            }
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
            MemberPropertyMap_UK: {
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

      await querInterface.removeConstraint(table, 'MemberPropertyMap_UK', {
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
