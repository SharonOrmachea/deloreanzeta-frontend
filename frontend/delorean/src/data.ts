import { Product } from "./app/shared/models/store/products/product";
import { News } from "./app/shared/models/news/news";

export const sample_products: Product[] = [
  {
    id: '1',
    name: 'Soy un producto',
    price: 1500,
    category: 'categoria-1',
    imageUrl: './assets/store/products/delorean-(1).png',
    description: 'Soy la descripcion del producto',
  },
  {
    id: '2',
    name: 'Soy un producto',
    price: 1500,
    category: 'categoria-1',
    imageUrl: './assets/store/products/delorean(2).png',
    description: 'Soy la descripcion del producto',
  },
  {
    id: '3',
    name: 'Soy un producto',
    price: 1500,
    category: 'categoria-1',
    imageUrl: './assets/store/products/delorean(3).png',
    description: 'Soy la descripcion del producto',
  },
  {
    id: '4',
    name: 'Soy un producto',
    price: 1500,
    category: 'categoria-1',
    imageUrl: './assets/store/products/delorean(4).png',
    description: 'Soy la descripcion del producto',
  }


]

export const sample_news: News[] = [
  {
    id: '1',
    name: 'Soy una noticia con 35 caracteres',
    date: '05/12/2022',
    description: 'Soy una descripcion breve de la noticia',
    imageUrl: './assets/news/news1.jpg'
  },
  {
    id: '2',
    name: 'Soy una noticia',
    date: '05/12/2022',
    description: 'Soy una descripcion breve de la noticia',
    imageUrl: './assets/news/news2.jpg'
  },
  {
    id: '3',
    name: 'Soy una noticia',
    date: '05/12/2022',
    description: 'Soy una descripcion breve de la noticia',
    imageUrl: './assets/news/news3.jpg'
  },
  {
    id: '4',
    name: 'Soy una noticia',
    date: '05/12/2022',
    description: 'Soy una descripcion breve de la noticia',
    imageUrl: './assets/news/news4.jpg'
  }
]
