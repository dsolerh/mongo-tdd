import { Schema } from 'mongoose';

export const ProductSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  title: String,
  desciption: String,
  image: String,
  price: Number,
  created: {
    type: Date,
    default: Date.now,
  },
});
