import {FC} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';

import {IPhoneNumberFormData} from '../model/types';
import {useNavigate} from 'react-router';
import {useLoginMutation} from '@features/auth-form/model/auth-api';
import {useAppDispatch} from '@app/store/hooks';
import {setCredentials} from '@shared/slices/auth-slice';
import PhoneNumberInput from '@shared/ui/Inputs/PhoneNumberInput';
import PasswordInput from '@shared/ui/Inputs/PasswordInput';
import {setUserCookie} from '@shared/lib/cookies/userCookies';
import {AuthButton} from '@shared/ui/Buttons';
import {ROUTES} from '@shared/config/routes';

export const AuthWithPhone: FC = () => {
  const [login, {isLoading, isError}] = useLoginMutation();
  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: {errors},
  } = useForm<IPhoneNumberFormData>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<IPhoneNumberFormData> = async data => {
    try {
      await login({
        username: data.phone_number,
        password: data.password,
      }).then(res => {
        if (!res?.error) {
          const {user_info, access, refresh} = res.data;
          dispatch(setCredentials({access: access, refresh: refresh}));
          setUserCookie(user_info);
          navigate(ROUTES.MAIN.DASHBOARD);
          setValue('phone_number', '');
          setValue('password', '');
        }
      });
    } catch (err) {
      console.error('Ошибка входа:', err);
    }
  };

  return (
    <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
      <PhoneNumberInput control={control} errors={errors} />
      <PasswordInput
        name={'password'}
        register={register}
        errors={errors}
        placeholder={'Parol'}
      />
      {isError && (
        <span className='w-full text-center mt-[16px] text-red-500 font-semibold'>
          Login yoki parol notog'ri kiritilgan
        </span>
      )}
      <AuthButton isError={isError} isLoading={isLoading} text={'Kirish'} />
    </form>
  );
};
