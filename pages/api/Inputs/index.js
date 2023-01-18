// ingredientes

import connectMongo from "../../../lib/connectMongo";
import { getUser, postUser, putUser } from "../../../lib/controller";

export default async function handler(req, res) {
	connectMongo();

	const { method } = req;

	switch (method) {
		case "GET":
			getUser(req, res);
			break;
		case "POST":
			postUser(req, res);
			break;
		case "PUT":
			putUser(req, res);
			break;
		case "DELETE":
			res.status(200).json({ name: `Method: ${method}` });
			break;
		default:
			res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
			res.status(405).end(`Method ${method} Not Allowed`);
			break;
	}
}
