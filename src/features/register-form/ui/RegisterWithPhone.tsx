import {useNavigate} from 'react-router';

import {useForm} from 'react-hook-form';
import {AuthButton} from '@shared/ui/Buttons';
import {IRegisterData} from '../model/types';
import {useRegisterMutation} from '../model/register-api';
import {ROUTES} from '@shared/config/routes';
import PhoneNumberInput from '@shared/ui/Inputs/PhoneNumberInput';

export const RegisterWithPhone = () => {
  const [singup, {isLoading, isError}] = useRegisterMutation();
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    setValue,
    formState: {errors},
  } = useForm();

  const onSubmit = async (data: IRegisterData) => {
    try {
      singup({
        data: {phone_number: data.phone_number},
        params: 'phone_number',
      }).then(res => {
        if (!res?.error) {
          navigate(ROUTES.AUTH.VERIFY, {
            state: {
              data: {phone_number: data.phone_number},
              params: 'phone_number',
            },
          });
          setValue('phone_number', '');
        }
      });
    } catch (err) {
      console.error('Ошибка входа:', err);
    }
  };
  return (
    <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
      <PhoneNumberInput control={control} errors={errors} />
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
