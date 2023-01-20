import mongoose from "mongoose";

mongoose.set("strictQuery", true);

const connectMongo = async () => { //FUNÇÃO PARA CONECTAR COM O BANCO DE DADOS
	try {
		const { connection } = await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		if (connection.readyState === 1) {
			console.log("CONECTOU MONGODB");
		}
	} catch (error) {
		return Promise.reject(error);
	}
};

export default connectMongo;
