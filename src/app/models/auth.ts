// Data Transfer Object => DTO
export class RegisterDTO {
  constructor(
    public nome: string = "",
    public email: string = "",
    public password: string = "",
  ) { }
}

export class LoginDTO {
  constructor(
    public email: string = "",
    public password: string = "",
  ) { }
}

export interface AuthResponse {
  accessToken: string;
  user: User
}

export interface User {
  id: number;
  email: string;
  nome: string;
}
