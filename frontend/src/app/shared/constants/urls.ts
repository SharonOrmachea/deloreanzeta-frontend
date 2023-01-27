const BASE_URL = 'http://localhost:3000/';

// Productos

export const PRODUCT_URL = BASE_URL + 'api/producto';

export const PRODUCT_BY_ID_URL = PRODUCT_URL + '';

export const PRODUCT_CATEGORIES_URL = BASE_URL + 'api/categoria';

export const PRODUCT_BY_CATEGORIES_URL = PRODUCT_URL + 'categoria/';


// Usuarios

// Login de usuarios
export const USER_LOGIN_URL = BASE_URL + 'auth/login';

// Registra un usuario y/o obtiene todos los usuarios (para el admin)
export const USER_URL = BASE_URL + 'users';

// Trae, edita un usuario por email (para el admin)
export const USER_BY_EMAIL_URL = USER_URL + '/';

// Se cambia la contraseña de un usuario logueado (pide la contraseña anterior y la nueva)
export const USER_CHANGE_PASS_URL = BASE_URL + 'auth/forgot-password'

// Se envia al email del usuario al que se quiere reestablecer la contraseña (pide el email)
export const USER_IDENTIFY_EMAIL_URL = BASE_URL + 'auth/forgot-password'

// Reestablece la contraseña
export const RESET_PASS_URL = BASE_URL + 'auth/new-password'
