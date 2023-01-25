export type Role = 'client' | 'admin';

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
