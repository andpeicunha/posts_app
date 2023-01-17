// ingredientes

import connectMongo from "../../../lib/connectMongo";

export default async function handler(req, res) {
	connectMongo();

	const { method } = req;

	switch (method) {
		case "GET":
			res.status(200).json({ name: `Method: ${method}` });
			break;
		case "POST":
			res.status(200).json({ name: `Method: ${method}` });
			break;
		case "PUT":
			res.status(200).json({ name: `Method: ${method}` });
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
