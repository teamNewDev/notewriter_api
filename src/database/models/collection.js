import mongoose from 'mongoose';
const { model, Schema } = mongoose;

const collectionSchema = new Schema({
    user_id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
});

const Collection = model('Collection', collectionSchema);

export default Collection;
