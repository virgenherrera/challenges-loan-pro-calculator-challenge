import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class RecordTable1714523746786 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'record',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment'
        },
        {
          name: 'operation_id',
          type: 'int',
          isNullable: false
        },
        {
          name: 'user_id',
          type: 'int',
          isNullable: false
        },
        {
          name: 'amount',
          type: 'decimal',
          precision: 10,
          scale: 2,
          isNullable: false
        },
        {
          name: 'user_balance',
          type: 'decimal',
          precision: 10,
          scale: 2,
          isNullable: false
        },
        {
          name: 'operation_response',
          type: 'text',
          isNullable: false
        },
        {
          name: 'date',
          type: 'timestamp',
          default: 'now()'
        },
        {
          name: 'isDeleted',
          type: 'boolean',
          default: false
        }
      ],
      foreignKeys: [
        {
          columnNames: ['operation_id'],
          referencedTableName: 'operation',
          referencedColumnNames: ['id']
        },
        {
          columnNames: ['user_id'],
          referencedTableName: 'user',
          referencedColumnNames: ['id']
        }
      ]
    }), true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('record');
  }
}
