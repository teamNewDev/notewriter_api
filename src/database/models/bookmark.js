import mongoose from 'mongoose';

const { model, Schema } = mongoose;

const bookMarkSchema = new Schema({
    tag_id: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    color_code: {
        type: String,
        required: true,
    }
});

const bookMark = model('bookMark', bookMarkSchema);

export default bookMark;
