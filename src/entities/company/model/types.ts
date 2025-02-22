export interface ICompany {
  name: string;
  sub_title: string;
  description: string;
  location: string;
  email: string;
  phone: string;
  website: string;
  lat: string;
  long: string;
  owner: number;
  business_ids: number[];
}

export interface IBanner {
  title?: string;
  subtitle?: string;
  photo: string;
}

export interface IProducts {
  name: string;
  price: string;
  unit_type: string;
  description?: string;
  photo: string;
}

export interface IService {
  name: string;
  photo: string;
}

export interface IOpportunity {
  title: string;
  description: string;
  photo: string;
}
