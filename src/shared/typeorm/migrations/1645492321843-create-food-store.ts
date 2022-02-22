import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createFoodStore1645492321843 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'foodstores',
              columns: [
                {
                  name: 'id',
                  type: 'int',
                  isPrimary: true,
                },
                {
                  name: 'name',
                  type: 'varchar',
                },
                {
                  name: 'createdAt',
                  type: 'timestamp',
                },
                {
                  name: 'updatedAt',
                  type: 'timestamp',
                },
              ],
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('foodstores');
    }

}
