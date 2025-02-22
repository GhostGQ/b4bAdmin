import {AuthButton} from '@shared/ui/Buttons';
import PasswordInput from '@shared/ui/Inputs/PasswordInput';
import {useForm} from 'react-hook-form';
import {useSetPasswordMutation} from '../model/register-api';
import {setCredentials} from '@shared/slices/auth-slice';
import {ROUTES} from '@shared/config/routes';
import {useNavigate} from 'react-router';
import {useAppDispatch} from '@app/store/hooks';
import {IRegisterFormData, ISetPassForm} from '../model/types';
import {setUserCookie} from '@shared/lib/cookies/userCookies';

interface Props {
  state: IRegisterFormData;
}

export const SetPassword = ({state}: Props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [setPassword, {isLoading, isError}] = useSetPasswordMutation();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: {errors},
  } = useForm<ISetPassForm>();

  const confirmPass = watch('password');

  const onSubmit = async (data: ISetPassForm) => {
    try {
      await setPassword({
        ...state.data,
        password: data.password,
        password2: data.password2,
      }).then(res => {
        if (!res?.error) {
          const {user, access, refresh} = res.data;
          dispatch(setCredentials({access: access, refresh: refresh}));
          navigate(ROUTES.AUTH.SET_USER_INFO);
          setUserCookie(user);
          setValue('password', '');
          setValue('password2', '');
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      className='mt-[32px] flex flex-col gap-4'
      onSubmit={handleSubmit(onSubmit)}
    >
      <PasswordInput
        name={'password'}
        register={register}
        errors={errors}
        placeholder={'Parol'}
      />
      <PasswordInput
        name={'password2'}
        register={register}
        errors={errors}
        placeholder={'Parolni Tasdiqlang'}
        confirmPass={confirmPass}
      />
      {errors.password2 && (
        <p className='text-red-500 w-full font-semibold mt-1'>
          {typeof errors.password2?.message === 'string' &&
            errors.password2.message}
        </p>
      )}
      <AuthButton text={'Tasdiqlash'} isLoading={isLoading} isError={isError} />
    </form>
  );
};
