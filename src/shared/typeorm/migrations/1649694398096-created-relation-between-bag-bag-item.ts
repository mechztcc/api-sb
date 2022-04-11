import {MigrationInterface, QueryRunner} from "typeorm";

export class createdRelationBetweenBagBagItem1649694398096 implements MigrationInterface {
    name = 'createdRelationBetweenBagBagItem1649694398096'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sale" DROP CONSTRAINT "FK_9c3df2981e06a9ee882c9835e2"`);
        await queryRunner.query(`ALTER TABLE "sale" DROP CONSTRAINT "FK_bfa3717f3abad5107d587d5823"`);
        await queryRunner.query(`ALTER TABLE "sale" DROP CONSTRAINT "FK_a742b91c1b99a4269c102d47542"`);
        await queryRunner.query(`CREATE TABLE "bags" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "customerId" integer, CONSTRAINT "REL_7a78a4b919e259dcaa53a367dc" UNIQUE ("customerId"), CONSTRAINT "PK_8ea1bfb4f475f35d6cffd0966ca" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "bag_item" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "price" character varying NOT NULL, "size" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "bagId" integer, CONSTRAINT "PK_f8bcc64dfcace9f15ff94bacc63" PRIMARY KEY ("id"))`);
        // await queryRunner.query(`ALTER TABLE "foodstores" ALTER COLUMN "description" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "sale" DROP CONSTRAINT "FK_a742b91c1b99a4269c102d47541"`);
        await queryRunner.query(`ALTER TABLE "sale" DROP CONSTRAINT "FK_bfa3717f3abad5107d587d58232"`);
        await queryRunner.query(`ALTER TABLE "sale" ADD CONSTRAINT "UQ_a742b91c1b99a4269c102d47541" UNIQUE ("customerId")`);
        await queryRunner.query(`ALTER TABLE "sale" ADD CONSTRAINT "UQ_bfa3717f3abad5107d587d58232" UNIQUE ("deliveryId")`);
        await queryRunner.query(`ALTER TABLE "bags" ADD CONSTRAINT "FK_7a78a4b919e259dcaa53a367dc2" FOREIGN KEY ("customerId") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "bag_item" ADD CONSTRAINT "FK_95cc58b8a2cdeb166a0a91f3846" FOREIGN KEY ("bagId") REFERENCES "bags"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sale" ADD CONSTRAINT "FK_a742b91c1b99a4269c102d47541" FOREIGN KEY ("customerId") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sale" ADD CONSTRAINT "FK_bfa3717f3abad5107d587d58232" FOREIGN KEY ("deliveryId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sale" DROP CONSTRAINT "FK_bfa3717f3abad5107d587d58232"`);
        await queryRunner.query(`ALTER TABLE "sale" DROP CONSTRAINT "FK_a742b91c1b99a4269c102d47541"`);
        await queryRunner.query(`ALTER TABLE "bag_item" DROP CONSTRAINT "FK_95cc58b8a2cdeb166a0a91f3846"`);
        await queryRunner.query(`ALTER TABLE "bags" DROP CONSTRAINT "FK_7a78a4b919e259dcaa53a367dc2"`);
        await queryRunner.query(`ALTER TABLE "sale" DROP CONSTRAINT "UQ_bfa3717f3abad5107d587d58232"`);
        await queryRunner.query(`ALTER TABLE "sale" DROP CONSTRAINT "UQ_a742b91c1b99a4269c102d47541"`);
        await queryRunner.query(`ALTER TABLE "sale" ADD CONSTRAINT "FK_bfa3717f3abad5107d587d58232" FOREIGN KEY ("deliveryId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sale" ADD CONSTRAINT "FK_a742b91c1b99a4269c102d47541" FOREIGN KEY ("customerId") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        // await queryRunner.query(`ALTER TABLE "foodstores" ALTER COLUMN "description" DROP NOT NULL`);
        await queryRunner.query(`DROP TABLE "bag_item"`);
        await queryRunner.query(`DROP TABLE "bags"`);
        await queryRunner.query(`ALTER TABLE "sale" ADD CONSTRAINT "FK_a742b91c1b99a4269c102d47542" FOREIGN KEY ("customerId") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sale" ADD CONSTRAINT "FK_bfa3717f3abad5107d587d5823" FOREIGN KEY ("deliveryId") REFERENCES "addresses"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sale" ADD CONSTRAINT "FK_9c3df2981e06a9ee882c9835e2" FOREIGN KEY ("foodstoreId") REFERENCES "foodstores"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
