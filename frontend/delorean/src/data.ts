import { Product } from "./app/shared/models/store/products/product";
import { News } from "./app/shared/models/news/news";
import { Carousel } from "./app/shared/models/store/carrusel/carousel";
import { Login } from "./app/shared/models/sign-in/sign-in";
import { Register } from './app/shared/models/sign-up/sign-up';

export const sample_products: Product[] = [
  {
    id: '1',
    name: 'Soy un producto',
    price: 1400,
    previousPrice: 2000,
    discount: 30,
    category: [
      'categoria-1',
      'categoria-2',
      'categoria-3'
    ],
    image1: './assets/store/products/delorean(1).png',
    image2: './assets/store/products/delorean(2).png',
    image3: './assets/store/products/delorean(3).png',
    image4: './assets/store/products/delorean(4).png',
    description: 'Soy la descripcion del producto, esto es una prueba para ver si se estira mi cajita o si anda igual de bien que la info de producto. Aparentemente anda excelente.',
    informacionProduct: 'Hola Testing, soy la informacion del producto donde mido la cantidad de caracteres que puedo almacenar sin que se agrande el divisor y controlar que por mas lineas de texto agregue esto va a seguir con el mismo tamaño. Prueba de desarrollo superada, se adapta re bien! Espero que mi pagina pase sus test tambien. Gracias por el esfuerzo y empeño que le estan poniendo al proyecto para que salga bien... Saludos! Sharon.'
  },
  {
    id: '2',
    name: 'Soy un producto',
    price: 1400,
    previousPrice: 2000,
    discount: 30,
    category: [
      'categoria-1'
    ],
    image1: './assets/store/products/delorean(2).png',
    image2: './assets/store/products/delorean(3).png',
    image3: './assets/store/products/delorean(4).png',
    image4: './assets/store/products/delorean(5).png',
    description: 'Soy la descripcion del producto',
    informacionProduct: 'Soy la informacion del producto'
  },
  {
    id: '3',
    name: 'Soy un producto',
    price: 1400,
    previousPrice: 2000,
    discount: 30,
    category: [
      'categoria-1'
    ],
    image1: './assets/store/products/delorean(3).png',
    image2: './assets/store/products/delorean(4).png',
    image3: './assets/store/products/delorean(5).png',
    image4: './assets/store/products/delorean(6).png',
    description: 'Soy la descripcion del producto',
    informacionProduct: 'Soy la informacion del producto'
  },
  {
    id: '4',
    name: 'Soy un producto',
    price: 1500,
    previousPrice: 2000,
    discount: 30,
    category: [
      'categoria-1'
    ],
    image1: './assets/store/products/delorean(4).png',
    image2: './assets/store/products/delorean(5).png',
    image3: './assets/store/products/delorean(6).png',
    image4: './assets/store/products/delorean(7).png',
    description: 'Soy la descripcion del producto',
    informacionProduct: 'Soy la informacion del producto'
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

export const sample_carousel: Carousel[] = [
  {
    id: 1,
    imageUrl: './assets/store/carrusel/slider1.gif',
    marginLeft: 2,
  },
  {
    id: 2,
    imageUrl: './assets/store/carrusel/slider2.gif',
    marginLeft: 2,
  },
  {
    id: 3,
    imageUrl: './assets/store/carrusel/slider3.gif',
    marginLeft: 2,
  }
]

export const sample_register: Register[] = [
  {
    name: 'Jotaro',
    lastname: 'Joestar',
    telephone: 1125641208,
    email: 'delorean.01@test.com',
    password: 'contraPrueba123',
    repeatPassword: 'contraPrueba123'
  },
  {
    name: 'Dio',
    lastname: 'Brando',
    telephone: 1125641208,
    email: 'delorean.01@test.com',
    password: 'contraPrueba123',
    repeatPassword: 'contraPrueba123'
  },
  {
    name: 'Sanji',
    lastname: 'Vinsmoke',
    telephone: 1125641208,
    email: 'delorean.01@test.com',
    password: 'contraPrueba123',
    repeatPassword: 'contraPrueba123'
  },
  {
    name: 'Zoro',
    lastname: 'Roronoa',
    telephone: 1125641208,
    email: 'delorean.01@test.com',
    password: 'contraPrueba123',
    repeatPassword: 'contraPrueba123'
  }
]

export const sample_login: Login[] = [
  {
    email: 'delorean.01@test.com',
    password: 'contraPrueba123'
  },
  {
    email: 'delorean.02@test.com',
    password: 'contraPrueba123'
  },
  {
    email: 'delorean.03@test.com',
    password: 'contraPrueba123'
  },
  {
    email: 'delorean.04@test.com',
    password: 'contraPrueba123'
  }
]
