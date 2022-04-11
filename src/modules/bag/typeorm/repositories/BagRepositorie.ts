import { EntityRepository, Repository } from "typeorm";
import { Bag } from "../entities/Bag";

@EntityRepository(Bag)
export class BagRepository extends Repository<Bag> {}