import type {PaginationDTO} from "@/ts/types/dto/pagination.dto";

export interface UsersRequestDTO {
  limit: number;
  skip: number;
}

export interface HairDTO {
  color: string;
  type: string;
}

export interface CoordinatesDTO {
  lat: number;
  lng: number;
}

export interface AddressDTO {
  address: string;
  city: string;
  coordinates: CoordinatesDTO;
  postalCode: string;
  state: string;
}

export interface BankDTO {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
}

export interface CompanyDTO {
  address: AddressDTO;
  department: string;
  name: string;
  title: string;
}

export interface UserDTO {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: HairDTO;
  domain: string;
  ip: string;
  address: AddressDTO;
  macAddress: string;
  university: string;
  bank: BankDTO;
  company: CompanyDTO;
  ein: string;
  ssn: string;
  userAgent: string;
}

export type UsersResponseDTO = PaginationDTO<UserDTO>;

