import {MigrationInterface, QueryRunner} from "typeorm";

export class createSale1649205537652 implements MigrationInterface {
    name = 'createSale1649205537652'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "foodstores" DROP CONSTRAINT "foodstores_address"`);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_ff56834e735fa78a15d0cf21926"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP CONSTRAINT "FK_402d1633c7bb26b452821331e04"`);
        await queryRunner.query(`CREATE TABLE "sale_product" ("id" SERIAL NOT NULL, "notes" character varying NOT NULL, "price" character varying NOT NULL, "size" character varying NOT NULL, "quantity" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "saleId" integer, CONSTRAINT "PK_4c90923fcc89bf8eeecd181fffc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sale" ("id" SERIAL NOT NULL, "notes" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "foodstoreId" integer, "deliveryId" integer, CONSTRAINT "FK_9c3df2981e06a9ee882c9835e2" FOREIGN KEY ("foodstoreId") REFERENCES "foodstores"("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_bfa3717f3abad5107d587d5823" FOREIGN KEY ("deliveryId") REFERENCES "addresses"("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "PK_d03891c457cbcd22974732b5de2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3"`);
        await queryRunner.query(`ALTER TABLE "foodstores" DROP CONSTRAINT "FK_27fce07f4ae7b77d9cfb3a30afb"`);
        await queryRunner.query(`ALTER TABLE "foodstores" ALTER COLUMN "userId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "foodstores" ALTER COLUMN "addressId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "foodstores" ADD CONSTRAINT "UQ_117eef56b198c632a1f7b4cbbd6" UNIQUE ("addressId")`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "categoryId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "foodstoreId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "foodstores" ADD CONSTRAINT "FK_27fce07f4ae7b77d9cfb3a30afb" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "foodstores" ADD CONSTRAINT "FK_117eef56b198c632a1f7b4cbbd6" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_ff56834e735fa78a15d0cf21926" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "categories" ADD CONSTRAINT "FK_402d1633c7bb26b452821331e04" FOREIGN KEY ("foodstoreId") REFERENCES "foodstores"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sale_product" ADD CONSTRAINT "FK_a50b661dd4ed9ce26b27d17ea2a" FOREIGN KEY ("saleId") REFERENCES "sale"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sale" ADD CONSTRAINT "FK_9c3df2981e06a9ee882c9835e22" FOREIGN KEY ("foodstoreId") REFERENCES "foodstores"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sale" ADD CONSTRAINT "FK_bfa3717f3abad5107d587d58232" FOREIGN KEY ("deliveryId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sale" DROP CONSTRAINT "FK_bfa3717f3abad5107d587d58232"`);
        await queryRunner.query(`ALTER TABLE "sale" DROP CONSTRAINT "FK_9c3df2981e06a9ee882c9835e22"`);
        await queryRunner.query(`ALTER TABLE "sale_product" DROP CONSTRAINT "FK_a50b661dd4ed9ce26b27d17ea2a"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP CONSTRAINT "FK_402d1633c7bb26b452821331e04"`);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_ff56834e735fa78a15d0cf21926"`);
        await queryRunner.query(`ALTER TABLE "foodstores" DROP CONSTRAINT "FK_117eef56b198c632a1f7b4cbbd6"`);
        await queryRunner.query(`ALTER TABLE "foodstores" DROP CONSTRAINT "FK_27fce07f4ae7b77d9cfb3a30afb"`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "foodstoreId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "categoryId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "foodstores" DROP CONSTRAINT "UQ_117eef56b198c632a1f7b4cbbd6"`);
        await queryRunner.query(`ALTER TABLE "foodstores" ALTER COLUMN "addressId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "foodstores" ALTER COLUMN "userId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "foodstores" ADD CONSTRAINT "FK_27fce07f4ae7b77d9cfb3a30afb" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email")`);
        await queryRunner.query(`DROP TABLE "sale"`);
        await queryRunner.query(`DROP TABLE "sale_product"`);
        await queryRunner.query(`ALTER TABLE "categories" ADD CONSTRAINT "FK_402d1633c7bb26b452821331e04" FOREIGN KEY ("foodstoreId") REFERENCES "foodstores"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_ff56834e735fa78a15d0cf21926" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "foodstores" ADD CONSTRAINT "foodstores_address" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
