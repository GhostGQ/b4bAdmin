import {IUser} from '@entities/user/model/types';

export interface AuthState {
  token: string | null;
}

export interface ITokens {
  access: string;
  refresh?: string | undefined;
}

export interface CredentialsPayload extends ITokens {
  user_info?: IUser;
}
