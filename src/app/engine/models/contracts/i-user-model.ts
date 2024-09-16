export interface IUser {
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
  tokenDecode:Array<any>;
  tokenExpired?:boolean;

  name:any;
  cpf:any;
  userType:any;
  userTypeDescription:any;
}
