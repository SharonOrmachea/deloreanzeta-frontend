export type Role = 'CUSTOMER' | 'ADMIN';

export interface UserLogin{
  email:string;
  password:string;
}

export interface UserResponse {
  message: string;
  token: string;
  userId: number;
  role: Role;
}
