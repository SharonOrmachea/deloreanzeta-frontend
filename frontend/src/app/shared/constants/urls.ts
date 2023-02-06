const BASE_URL = 'http://localhost:3000/';

// -----------------------TIENDA------------------------------------------------

// --PRODUCTO--

// Trae todos los productos - GET
export const PRODUCT_URL = BASE_URL + 'product';

// Trae un producto por ID - GET
export const PRODUCT_BY_ID_URL = PRODUCT_URL + '';

// --CATEGORIA--

// Trae todas las categorias - GET
export const PRODUCT_CATEGORIES_URL = BASE_URL + 'category';

// Trae un producto por categoria - GET
export const PRODUCT_BY_CATEGORIES_URL = PRODUCT_URL + '';


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

// Trae todos los Tours - GET
export const TOURS_URL = BASE_URL + 'tour';

// Trae un Tour por ID - GET
export const TOUR_BY_ID_URL = TOURS_URL + '/';

// Agrega un nuevo Tour - POST
export const TOUR_NEW_URL = TOURS_URL;

// Edita un Tour - PATCH
export const TOUR_EDIT_URL = TOUR_BY_ID_URL;

// Elimina un Tour - DELETE
export const TOUR_DELETE_URL = TOUR_BY_ID_URL;


