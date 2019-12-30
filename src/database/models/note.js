import mongoose from 'mongoose';

const { model, Schema } = mongoose;

const noteSchema = new Schema({
  collection_id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  tag_id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});

const note = model('note', noteSchema);

export default note;
