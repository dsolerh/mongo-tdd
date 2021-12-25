import { Document } from 'mongoose';
import { User } from './user.type';

interface ProductOrder {
  product: Product;
  quantity: number;
}

export interface Product extends Document {
  owner: User;
  totalPrice: number;
  products: ProductOrder[];
  created: Date;
}
