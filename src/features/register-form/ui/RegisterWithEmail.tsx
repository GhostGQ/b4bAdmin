import {useNavigate} from 'react-router';

import {useForm} from 'react-hook-form';
import EmailInput from '@shared/ui/Inputs/EmailInput';
import {AuthButton} from '@shared/ui/Buttons';
import {IRegisterData} from '../model/types';
import {useRegisterMutation} from '../model/register-api';
import {ROUTES} from '@shared/config/routes';

export const RegisterWithEmail = () => {
  const [singup, {isLoading, isError}] = useRegisterMutation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: {errors},
  } = useForm();

  const onSubmit = async (data: IRegisterData) => {
    try {
      singup({
        data: {email: data.email},
        params: 'email',
      }).then(res => {
        if (!res?.error) {
          navigate(ROUTES.AUTH.VERIFY, {
            state: {email: data.email, params: 'email'},
          });
          setValue('email', '');
        }
      });
    } catch (err) {
      console.error('Ошибка входа:', err);
    }
  };
  return (
    <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
      <EmailInput register={register} errors={errors} />
      {isError && (
        <p className='w-full text-center text-red-500 font-semibold'>
          Bunday hisob allaqachon yaratilgan
        </p>
      )}
      <AuthButton
        isError={isError}
        isLoading={isLoading}
        text={'Davom etish'}
      />
    </form>
  );
};
