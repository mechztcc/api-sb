import { Request, Response } from "express";
import { CreateBagService } from "../services/CreateBagService";

export class BagController {

	async create(req: Request, res: Response) {
		try {
			
			const { id } = req.user;
			const createBag = new CreateBagService();

			const bag = await createBag.execute({ customer_id: id });

			return res.json(bag);
		} catch (error) {
			console.log(error);
			return res.status(400).json('Error when execute task ');
		}
	}
}
