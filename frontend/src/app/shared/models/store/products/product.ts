export class Product{
  id!:string;
  name!:string;
  price!:number;
  previousPrice?:number;
  discount?:number;
  category!:string[];
  imageUrl!:string[];
  description?:string;
  information?:string;
}
