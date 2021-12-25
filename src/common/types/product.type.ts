import { Document } from 'mongoose';
import { User } from './user.type';

export interface Product extends Document {
  owner: User;
  title: string;
  desciption: string;
  image: string;
  price: number;
  created: Date;
}
