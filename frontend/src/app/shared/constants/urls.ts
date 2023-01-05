const BASE_URL = 'http://localhost:3000';

// Productos
export const PRODUCT_URL = BASE_URL + '/api/producto';

export const PRODUCT_CATEGORIES_URL = BASE_URL + '/api/categoria';

export const PRODUCT_BY_CATEGORIES_URL = PRODUCT_URL + '/categoria/';

export const PRODUCT_BY_ID_URL = PRODUCT_URL + '/';

// Usuarios
export const USER_LOGIN_URL = BASE_URL + '/api/login';
export const USER_REGISTER_URL = BASE_URL + '/api/registro';
