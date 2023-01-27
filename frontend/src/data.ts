import { Product } from "./app/shared/models/store/products/product";
import { News } from "./app/shared/models/news/news";
import { ProductCategories } from "./app/shared/models/store/category/product-tag";
import { Carousel } from "./app/shared/models/store/carrusel/carousel";
import { Login } from "./app/shared/models/sign-in/sign-in";
import { Register } from './app/shared/models/sign-up/sign-up';
import { Tours } from './app/shared/models/tours/tours';

export const sample_products: Product[] = [
  {
    id: '1',
    name: 'Soy un producto con un maximo de 45 caracteres',
    price: 1400,
    previousPrice: 2000,
    discount: 30,
    category: [
      'Tazas',
      'Cuadros'
    ],
    imageUrl: [
      './assets/store/products/delorean(1).png',
      './assets/store/products/delorean(2).png',
      './assets/store/products/delorean(3).png',
      './assets/store/products/delorean(4).png',
    ],
    description: 'Hola Testing, soy la informacion del producto donde mido la cantidad de caracteres que puedo almacenar sin que se agrande el divisor y controlar que por mas lineas de texto agregue esto va a seguir con el mismo tamaño. Prueba de desarrollo superada, se adapta re bien! Espero que mi pagina pase sus test tambien. Gracias por el esfuerzo y empeño que le estan poniendo al proyecto para que salga bien... Saludos! Sharon.'
  },
  {
    id: '2',
    name: 'Soy un producto con un maximo de 45 caracteres',
    price: 1400,
    previousPrice: 2000,
    discount: 30,
    category: [
      'Cuadros'
    ],
    imageUrl: [
      './assets/store/products/delorean(5).png',
      './assets/store/products/delorean(6).png',
      './assets/store/products/delorean(7).png',
      './assets/store/products/delorean(8).png'
  ],
    description: 'Soy la informacion del producto'
  },
  {
    id: '3',
    name: 'Soy un producto',
    price: 1400,
    previousPrice: 2000,
    discount: 30,
    category: [
      'Remeras'
    ],
    imageUrl: [
      './assets/store/products/delorean(9).png',
      './assets/store/products/delorean(10).png',
      './assets/store/products/delorean(11).jpg',
      './assets/store/products/delorean(12).png'
    ],
    description: 'Soy la informacion del producto'
  },
  {
    id: '4',
    name: 'Soy un producto',
    price: 1500,
    previousPrice: 2000,
    discount: 30,
    category: [
      'Tazas',
      'Remeras'
    ],
    imageUrl: [
      './assets/store/products/delorean(1).png',
      './assets/store/products/delorean(2).png',
      './assets/store/products/delorean(3).png',
      './assets/store/products/delorean(4).png'
    ],
    description: 'Soy la informacion del producto'
  },
  {
    id: '5',
    name: 'Soy un producto',
    price: 1400,
    previousPrice: 2000,
    discount: 30,
    category: [
      'Cuadros'
    ],
    imageUrl: [
      './assets/store/products/delorean(5).png',
      './assets/store/products/delorean(6).png',
      './assets/store/products/delorean(7).png',
      './assets/store/products/delorean(8).png'
    ],
    description: 'Hola Testing, soy la informacion del producto donde mido la cantidad de caracteres que puedo almacenar sin que se agrande el divisor y controlar que por mas lineas de texto agregue esto va a seguir con el mismo tamaño. Prueba de desarrollo superada, se adapta re bien! Espero que mi pagina pase sus test tambien. Gracias por el esfuerzo y empeño que le estan poniendo al proyecto para que salga bien... Saludos! Sharon.'
  },
  {
    id: '6',
    name: 'Soy un producto',
    price: 1400,
    previousPrice: 2000,
    discount: 30,
    category: [
      'Remeras'
    ],
    imageUrl: [
      './assets/store/products/delorean(9).png',
      './assets/store/products/delorean(10).png',
      './assets/store/products/delorean(11).png',
      './assets/store/products/delorean(12).png'
    ],
    description: 'Hola Testing, soy la informacion del producto donde mido la cantidad de caracteres que puedo almacenar sin que se agrande el divisor y controlar que por mas lineas de texto agregue esto va a seguir con el mismo tamaño. Prueba de desarrollo superada, se adapta re bien! Espero que mi pagina pase sus test tambien. Gracias por el esfuerzo y empeño que le estan poniendo al proyecto para que salga bien... Saludos! Sharon.'
  },
  {
    id: '7',
    name: 'Soy un producto',
    price: 1400,
    previousPrice: 2000,
    discount: 30,
    category: [
      'Tazas'
    ],
    imageUrl: [
      './assets/store/products/delorean(1).png',
      './assets/store/products/delorean(2).png',
      './assets/store/products/delorean(3).png',
      './assets/store/products/delorean(4).png'
    ],
    description: 'Hola Testing, soy la informacion del producto donde mido la cantidad de caracteres que puedo almacenar sin que se agrande el divisor y controlar que por mas lineas de texto agregue esto va a seguir con el mismo tamaño. Prueba de desarrollo superada, se adapta re bien! Espero que mi pagina pase sus test tambien. Gracias por el esfuerzo y empeño que le estan poniendo al proyecto para que salga bien... Saludos! Sharon.'
  },
  {
    id: '8',
    name: 'Soy un producto',
    price: 1400,
    previousPrice: 2000,
    discount: 30,
    category: [
      'Cuadros'
    ],
    imageUrl: [
      './assets/store/products/delorean(5).png',
      './assets/store/products/delorean(6).png',
      './assets/store/products/delorean(7).png',
      './assets/store/products/delorean(8).png'
    ],
    description: 'Hola Testing, soy la informacion del producto donde mido la cantidad de caracteres que puedo almacenar sin que se agrande el divisor y controlar que por mas lineas de texto agregue esto va a seguir con el mismo tamaño. Prueba de desarrollo superada, se adapta re bien! Espero que mi pagina pase sus test tambien. Gracias por el esfuerzo y empeño que le estan poniendo al proyecto para que salga bien... Saludos! Sharon.'
  },
  {
    id: '9',
    name: 'Soy un producto',
    price: 1400,
    previousPrice: 2000,
    discount: 30,
    category: [
      'Remeras'
    ],
    imageUrl: [
      './assets/store/products/delorean(9).png',
      './assets/store/products/delorean(10).png',
      './assets/store/products/delorean(11).png',
      './assets/store/products/delorean(12).png'
    ],
    description: 'Hola Testing, soy la informacion del producto donde mido la cantidad de caracteres que puedo almacenar sin que se agrande el divisor y controlar que por mas lineas de texto agregue esto va a seguir con el mismo tamaño. Prueba de desarrollo superada, se adapta re bien! Espero que mi pagina pase sus test tambien. Gracias por el esfuerzo y empeño que le estan poniendo al proyecto para que salga bien... Saludos! Sharon.'
  },
  {
    id: '10',
    name: 'Soy un producto',
    price: 1400,
    previousPrice: 2000,
    discount: 30,
    category: [
      'Tazas'
    ],
    imageUrl: [
      './assets/store/products/delorean(1).png',
      './assets/store/products/delorean(2).png',
      './assets/store/products/delorean(3).png',
      './assets/store/products/delorean(4).png'
    ],
    description: 'Hola Testing, soy la informacion del producto donde mido la cantidad de caracteres que puedo almacenar sin que se agrande el divisor y controlar que por mas lineas de texto agregue esto va a seguir con el mismo tamaño. Prueba de desarrollo superada, se adapta re bien! Espero que mi pagina pase sus test tambien. Gracias por el esfuerzo y empeño que le estan poniendo al proyecto para que salga bien... Saludos! Sharon.'
  },
]

export const sample_productTags: ProductCategories[] = [
  { id: 1, name: 'Tazas', count: 0 },
  { id: 2, name: 'Cuadros', count: 0 },
  { id: 3, name: 'Remeras', count: 0 },
  { id: 4, name: 'Funkos', count: 0 },
]

export const sample_news: News[] = [
  {
    id: '1',
    name: 'Soy una noticia con un maximo de 51 caracteres',
    date: '05/12/2022',
    description: 'En esta sección, para que quede prolijo deben poner texto con similar cantidad de caracteres 🤗',
    imageUrl: './assets/news/news1.jpg'
  },
  {
    id: '2',
    name: 'Soy una noticia con un maximo de 51 caracteres',
    date: '05/12/2022',
    description: 'En esta sección, para que quede prolijo deben poner texto con similar cantidad de caracteres 🙈',
    imageUrl: './assets/news/news2.jpg'
  },
  {
    id: '3',
    name: 'Soy una noticia con un maximo de 51 caracteres',
    date: '05/12/2022',
    description: 'En esta sección, para que quede prolijo deben poner texto con similar cantidad de caracteres 🙈',
    imageUrl: './assets/news/news3.jpg'
  },
  {
    id: '4',
    name: 'Soy una noticia con un maximo de 51 caracteres',
    date: '05/12/2022',
    description: 'En esta sección, para que quede prolijo deben poner texto con similar cantidad de caracteres 🙈',
    imageUrl: './assets/news/news4.jpg'
  },
  {
    id: '5',
    name: 'Soy una noticia con un maximo de 51 caracteres',
    date: '05/12/2022',
    description: 'En esta sección, para que quede prolijo deben poner texto con similar cantidad de caracteres 🙈',
    imageUrl: './assets/news/news4.jpg'
  },
  {
    id: '6',
    name: 'Soy una noticia con un maximo de 51 caracteres',
    date: '05/12/2022',
    description: 'En esta sección, para que quede prolijo deben poner texto con similar cantidad de caracteres 👻',
    imageUrl: './assets/news/news4.jpg'
  },
  {
    id: '7',
    name: 'Soy una noticia con un maximo de 51 caracteres',
    date: '05/12/2022',
    description: 'En esta sección, para que quede prolijo deben poner texto con similar cantidad de caracteres 👻',
    imageUrl: './assets/news/news4.jpg'
  },
  {
    id: '8',
    name: 'Soy una noticia con un maximo de 51 caracteres',
    date: '05/12/2022',
    description: 'En esta sección, para que quede prolijo deben poner texto con similar cantidad de caracteres 👻',
    imageUrl: './assets/news/news3.jpg'
  },
]

export const sample_carousel: Carousel[] = [
  {
    id: 1,
    imageUrl: './assets/store/carrusel/slider1.gif'
  },
]

export const sample_tours: Tours[] = [
  {
    id: '1',
    date: '05 de Junio del 2022',
    name: 'Un nombre para el tour',
    place: 'Jose cuchillos paz, Buenos Aires.'
  },
  {
    id: '2',
    date: '20 de Agosto del 2022',
    name: 'Otro nombre para el tour',
    place: 'Tour mar de las pompas, Buenos Aires.'
  },
  {
    id: '3',
    date: '05 de Junio del 2022',
    name: 'Otro de otro nombre para el tour',
    place: 'Quien sabe que mas hay, Buenos Aires.'
  },

  {
    id: '4',
    date: '05 de Junio del 2022',
    name: 'Un nombre para el tour',
    place: 'Jose cuchillos paz, Buenos Aires.'
  },
  {
    id: '5',
    date: '20 de Agosto del 2022',
    name: 'Otro nombre para el tour',
    place: 'Tour mar de las pompas, Buenos Aires.'
  },
  {
    id: '6',
    date: '05 de Junio del 2022',
    name: 'Otro de otro nombre para el tour',
    place: 'Quien sabe que mas hay, Buenos Aires.'
  },


]
