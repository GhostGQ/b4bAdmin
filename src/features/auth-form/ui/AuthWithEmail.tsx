import {FC} from 'react';
import {useForm, SubmitHandler} from 'react-hook-form';

import {useNavigate} from 'react-router-dom';
import {useAppDispatch} from '@app/store/hooks';
import {useLoginMutation} from '@features/auth-form/model/auth-api';
import {setCredentials} from '@shared/slices/auth-slice';
import {IEmailFormData} from '@features/auth-form/model/types';
import EmailInput from '@shared/ui/Inputs/EmailInput';
import PasswordInput from '@shared/ui/Inputs/PasswordInput';
import {AuthButton} from '@shared/ui/Buttons';
import {setUserCookie} from '@shared/lib/cookies/userCookies';
import { ROUTES } from '@shared/config/routes';

export const AuthWithEmail: FC = () => {
  const [login, {isLoading, isError}] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: {errors},
  } = useForm<IEmailFormData>();

  const onSubmit: SubmitHandler<IEmailFormData> = async data => {
    try {
      await login({
        username: data.email,
        password: data.password,
      }).then(res => {
        if (!res?.error) {
          const {user_info, access, refresh} = res.data;
          dispatch(setCredentials({access: access, refresh: refresh}));
          navigate(ROUTES.MAIN.DASHBOARD);
          setUserCookie(user_info);
          setValue('email', '');
          setValue('password', '');
        }
      });
    } catch (err) {
      console.error('Ошибка входа:', err);
    }
  };

  return (
    <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
      <EmailInput register={register} errors={errors} />
      <PasswordInput
        name='password'
        register={register}
        errors={errors}
        placeholder='Parol'
      />
      {isError && (
        <span className='w-full text-center mt-[16px] text-red-500 font-semibold'>
          Login yoki parol notog'ri kiritilgan
        </span>
      )}
      <AuthButton isError={isError} isLoading={isLoading} text='Kirish' />
    </form>
  );
};
