import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class createCategoryProduct1648829229929 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'products',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'price',
            type: 'varchar',
          },
          {
            name: 'size',
            type: 'varchar',
          },
          {
            name: 'categoryId',
            type: 'int',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      })
    );

    await queryRunner.createTable(
      new Table({
        name: 'categories',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'actived',
            type: 'boolean',
          },
          {
            name: 'foodstoreId',
            type: 'int',
          },
          {
            name: 'productsId',
            type: 'int',

          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        
      })
    );

    await queryRunner.createForeignKey(
      'categories',
      new TableForeignKey({
        columnNames: ['foodstoreId'],
        referencedTableName: 'foodstores',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      })
    );
    await queryRunner.createForeignKey(
      'categories',
      new TableForeignKey({
        columnNames: ['productsId'],
        referencedTableName: 'products',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      })
    );

    await queryRunner.createForeignKey(
      'products',
      new TableForeignKey({
        columnNames: ['categoryId'],
        referencedTableName: 'categories',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {

    const tableProd = await queryRunner.getTable('products');
    const prodFk = tableProd.foreignKeys.find((fk) => fk.columnNames.indexOf('categoryId') !== -1);

    const tableCat = await queryRunner.getTable('categories');
    const catProdFk = tableCat.foreignKeys.find((fk) => fk.columnNames.indexOf('productsId') !== -1);
    const catStoreFk = tableCat.foreignKeys.find((fk) => fk.columnNames.indexOf('foodstoreId') !== -1);

    await queryRunner.dropForeignKey('categories', catProdFk);
    await queryRunner.dropForeignKey('categories', catStoreFk);
    await queryRunner.dropForeignKey('products', prodFk);

    await queryRunner.dropTable('categories');
    await queryRunner.dropTable('products');
  }
}
