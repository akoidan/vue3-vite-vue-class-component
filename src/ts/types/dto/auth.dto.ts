export interface AuthRequestDTO {
  username: string;
  password: string;
}

export interface AuthResponseDTO {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
}
