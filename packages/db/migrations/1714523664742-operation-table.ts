import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class OperationTable1714523664742 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'operation',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment'
        },
        {
          name: 'type',
          type: 'enum',
          enum: ['addition', 'subtraction', 'multiplication', 'division', 'square_root', 'random_string'],
          isNullable: false
        },
        {
          name: 'cost',
          type: 'decimal',
          precision: 10,
          scale: 2,
          isNullable: false
        }
      ]
    }), true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('operation');
  }
}
