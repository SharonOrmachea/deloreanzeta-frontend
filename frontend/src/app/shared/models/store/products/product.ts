export class Product{
  id!:string;
  name!:string;
  price!:any|number;
  previousPrice?:number;
  discount?:number;
  category!:string[];
  imageUrl!:string[];
  description?:string;
}
