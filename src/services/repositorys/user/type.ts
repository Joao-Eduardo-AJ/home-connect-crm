import { type IAddress } from "../address/type";
import { type IContact } from "../contact/type";

export interface IUser {
  cpf?: string;
  birthDate?: string;
  fullName: string;
  password?: string;

  role?: "Common" | "Administrator";
  contact: IContact;
  address: IAddress;
}
