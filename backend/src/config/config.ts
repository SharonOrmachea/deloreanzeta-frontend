// initlaize the environment variables
import { config } from 'dotenv';
config();

export const PORT = process.env.PORT || 3000;

export const DB_TYPE = process.env.DB_TYPE || 'mysql';
export const DB_USER = process.env.DB_USER || 'root';
export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_PORT = process.env.DB_PORT || 3305;
export const DB_PASSWORD = process.env.DB_PASSWORD || '0000';
export const DB_DATABASE = process.env.DB_DATABASE || 'deloreanzeta';

export const JWT_SECRET = process.env.JWT_SECRET || 'deloreanretro';
export const JWT_SECRET_RESET = process.env.JWT_SECRET_RESET || 'resetpassword';
export const MAIL_HOST = process.env.MAIL_HOST || 'smtp.gmail.com';
export const MAIL_PORT = process.env.MAIL_HOST || 465;
export const MAIL_CONTACT = process.env.MAIL_CONTACT || 'lopezaxelsec@gmail.com';
export const MAIL_CONTACT_PASSWORD = process.env.MAIL_CONTACT_PASSWORD || 'ocwocquyzzxcypol';
export const MAIL_CONTACT_CLIENT_ID = process.env.MAIL_CONTACT_CLIENT_ID;
export const MAIL_CONTACT_CLIENT_SECRET = process.env.MAIL_CONTACT_CLIENT_SECRET;
export const OAUTH_REFRESH_TOKEN = process.env.OAUTH_REFRESH_TOKEN;
export const OAUTH_ACCESS_TOKEN = process.env.OAUTH_ACCESS_TOKEN;
