import { EntityRepository, Repository } from "typeorm";
import { SaleProduct } from "../entities/SaleProduct";


@EntityRepository(SaleProduct)
export class SalesProductsRepository extends Repository<SaleProduct> {}