import { Product } from '../products/product';

export class ItemsCart{
  constructor(public product:Product){}
  total:number = 1;
  price:number = this.product.price;
}

