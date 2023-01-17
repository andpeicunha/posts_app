import connectMongo from '../../lib/connectMongo';
import ingredModel from '../../models/ingredModel';

export default async function addTest(req, res) {
    try {
        console.log('CONNECTING TO MONGO');
        await connectMongo();
        console.log('CONNECTED TO MONGO');

        console.log('CREATING DOCUMENT');
        // const test = await ingredModel.create(req.body);
        const Test = await ingredModel.create({ name_ingred: 'Teste', price: '99.90' });
        console.log('CREATED DOCUMENT');

        res.json(Test);
    } catch (error) {
        console.log(error);
        res.json({ error });
    }
}