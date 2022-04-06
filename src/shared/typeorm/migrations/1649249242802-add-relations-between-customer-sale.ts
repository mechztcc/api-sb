import {MigrationInterface, QueryRunner} from "typeorm";

export class addRelationsBetweenCustomerSale1649249242802 implements MigrationInterface {
    name = 'addRelationsBetweenCustomerSale1649249242802'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customers" ADD "addressId" integer`);
        await queryRunner.query(`ALTER TABLE "customers" ADD CONSTRAINT "UQ_9a1ba71f8651412e2003cfa46d4" UNIQUE ("addressId")`);
        await queryRunner.query(`ALTER TABLE "sale" ADD "customerId" integer`);
        await queryRunner.query(`ALTER TABLE "sale" ADD CONSTRAINT "UQ_a742b91c1b99a4269c102d47541" UNIQUE ("customerId")`);
        await queryRunner.query(`ALTER TABLE "customers" ADD CONSTRAINT "FK_9a1ba71f8651412e2003cfa46d4" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sale" ADD CONSTRAINT "FK_a742b91c1b99a4269c102d47541" FOREIGN KEY ("customerId") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sale" DROP CONSTRAINT "FK_a742b91c1b99a4269c102d47541"`);
        await queryRunner.query(`ALTER TABLE "customers" DROP CONSTRAINT "FK_9a1ba71f8651412e2003cfa46d4"`);
        await queryRunner.query(`ALTER TABLE "sale" DROP CONSTRAINT "UQ_a742b91c1b99a4269c102d47541"`);
        await queryRunner.query(`ALTER TABLE "sale" DROP COLUMN "customerId"`);
        await queryRunner.query(`ALTER TABLE "customers" DROP CONSTRAINT "UQ_9a1ba71f8651412e2003cfa46d4"`);
        await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "addressId"`);
    }

}
