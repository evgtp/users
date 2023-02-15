export interface IUser {
  email: string;
  id?: number;
  name: string;
  username: string;
  phone: string;
  website: string;
  company: ICompany;
  address: IAddress;
}

interface ICompany {
  bs?: string;
  catchPhrase?: string;
  name: string;
}

 interface IAddress {
  city: string;
  geo?: IGeo;
  street: string;
  suite: string;
  zipcode: string;
}

 interface IGeo {
  lat: string;
  lng: string;
}