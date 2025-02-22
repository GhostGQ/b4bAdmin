export interface IRegisterData {
  phone_number?: string;
  email?: string;
}

export interface ISetPassForm {
  password: string;
  password2: string;
}

export interface IRegisterFormData {
  data: IRegisterData;
  params: 'email' | 'phone_number';
}

export interface IVerify {
  data: {
    verification_code: string;
  };
  params: 'email' | 'phone';
}

export interface ISetPass extends ISetPassForm {
  phone_number?: string;
  email?: string;
}
