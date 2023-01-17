import { Schema, models, model } from 'mongoose';

const ingredSchema = new Schema({
    name_ingred: { type: String, require: true },
    price: { type: String }
});

// const IngredModel = models.Ingred || model('IngredModel', IngredSchema);
// const schema = new mongoose.Schema({ name: 'string', size: 'string' });

const IngredModel = models.ingredModel || model('ingredModel', IngredSchema);
export default IngredModel;