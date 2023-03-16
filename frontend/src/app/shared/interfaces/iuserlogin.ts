export type Role = 'client' | 'admin';

export interface UserLogin{
  email:string;
  password:string;
}

export interface UserResponse {
  id: number;
  email: string;
  name: string;
  lastname: string;
  telephone: string;
  role: Role;
  token: string;
  message: string;
}

export interface UserSendEmail{
  email:string;
}

export interface UserResetPass{
  password:string;
  confirmPassword:string;
}

