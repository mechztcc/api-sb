import { EntityRepository, Repository } from "typeorm";
import { Sale } from "../entities/Sale";


@EntityRepository(Sale)
export class SalesRepository extends Repository<Sale> {}