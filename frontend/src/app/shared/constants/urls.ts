const BASE_URL = 'http://localhost:3000/';

// -----------------------TIENDA------------------------------------------------

// --PRODUCTO--

// Trae todos los productos - GET
export const PRODUCT_URL = BASE_URL + 'product';

// Trae, edita y elimina un producto por ID - GET - PATCH - DELETE
export const PRODUCT_BY_ID_URL = PRODUCT_URL + '';

// --CATEGORIA--

// Trae y crea todas las categorias - GET - POST
export const CATEGORIES_URL = BASE_URL + 'category';

// Trae, edita y elimina una Categoría por ID - GET - PATCH - DELETE
export const CATEGORY_BY_ID_URL = CATEGORIES_URL + '';

// --BANNER--

// Trae y crea los Banners - GET - POST
export const BANNER_URL = BASE_URL + '';



// -----------------------USUARIOS------------------------------------------------

// Login de usuarios
export const USER_LOGIN_URL = BASE_URL + 'auth/login';

// Registra un usuario y/o obtiene todos los usuarios (para el admin)
export const USER_URL = BASE_URL + 'users';

// Trae, edita un usuario por email (para el admin)
export const USER_BY_EMAIL_URL = USER_URL + '/';

// Se cambia la contraseña de un usuario logueado (pide la contraseña anterior y la nueva) - POST
export const USER_CHANGE_PASS_URL = BASE_URL + 'auth/change-password';

// Se envia al email del usuario al que se quiere reestablecer la contraseña (pide el email) POST
export const USER_IDENTIFY_EMAIL_URL = BASE_URL + 'auth/forgot-password';

// Autorizacion que valida restablecimiento de contraseña olvidada (POST)
export const AUTHORIZE_RESET_PASS_URL = BASE_URL + 'auth/authorize-password';

// Reestablece la contraseña olvidada (POST)
export const RESET_PASS_URL = BASE_URL + 'auth/new-password';

// -----------------------CONTRATACIONES------------------------------------------------

export const SEND_HIRING_URL = BASE_URL + 'hirings/send-email';

// -----------------------TOURS------------------------------------------------

// Trae y agrega todos los Tours - GET - POST
export const TOURS_URL = BASE_URL + 'tour';

// Trae, edita y elimina un Tour por ID - GET - PATCH - DELETE
export const TOUR_BY_ID_URL = TOURS_URL + '/';

// -----------------------NEWS-(Noticias)------------------------------------------------

// Trae y agrega todas las Noticias - GET - POST
export const NEWS_URL = BASE_URL + 'new';

// Trae, edita y elimina una Noticia por ID - GET - PATCH - DELETE
export const NEWS_BY_ID_URL = NEWS_URL + '/';

// -----------------------ABOUT-US-------------------------------------------------

// Trae todos los Integrantes - GET / Agrega un nuevo Tour - POST
export const ABOUT_US_URL = BASE_URL + 'member';

// Trae, edita y elimina una Noticia por ID - GET - PATCH - DELETE
export const ABOUT_US_ID_URL = ABOUT_US_URL + '/';

// -----------------------GALLERY-------------------------------------------------



