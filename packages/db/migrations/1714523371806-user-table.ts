import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class UserTable1714523371806 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "user",
      columns: [
        {
          name: "id",
          type: "int",
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment'
        },
        {
          name: "email",
          type: "varchar",
          isUnique: true
        },
        {
          name: "password",
          type: "varchar",
          isNullable: false
        },
        {
          name: "status",
          type: "varchar",
          default: "'active'"
        }
      ]
    }), true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("user");
  }
}
