import mongoose from 'mongoose';

const { model, Schema } = mongoose;

const tagSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  color_code: {
    type: String,
    required: true,
  },
});

const tag = model('tag', tagSchema);

export default tag;
