import { IUser } from "./contracts/i-user-model";

export class User implements IUser{
  firstname: any;
  lastname: any;
  address: any;
  city: any;
  state: any;
  phone: any;
  mobilephone: any;
  email: any;
  password?: any;
  id?: any;
  token?: any;
  tokenDecode:any = [];
  tokenExpired?: boolean | undefined;
  name: any;
  cpf: any;
  userType: any;
  userTypeDescription: any;

}
