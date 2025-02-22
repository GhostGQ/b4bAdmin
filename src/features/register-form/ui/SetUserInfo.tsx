import {useUpdateUserMeMutation} from '@entities/user/model/api';
import {AuthButton} from '@shared/ui/Buttons';
import TextInput from '@shared/ui/Inputs/TextInput';
import {useNavigate} from 'react-router';
import {useForm} from 'react-hook-form';
import {ROUTES} from '@shared/config/routes';

interface IUserForm {
  first_name: string;
  last_name: string;
}

export const SetUserInfo = () => {
  const navigate = useNavigate();
  const [updateUserMe, {isLoading, isError}] = useUpdateUserMeMutation();

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<IUserForm>();

  const onSubmit = async (data: IUserForm) => {
    updateUserMe({...data}).then(res => {
      if (!res?.error) {
        navigate(ROUTES.MAIN.DASHBOARD);
      }
    });
  };

  return (
    <form
      className='mt-[32px] flex flex-col gap-4'
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextInput
        name={'first_name'}
        placeholder={'Ism'}
        register={register}
        errors={errors}
      />
      <TextInput
        name={'last_name'}
        placeholder={'Familiya'}
        register={register}
        errors={errors}
      />

      <AuthButton text={'Tasdiqlash'} isError={isError} isLoading={isLoading} />
    </form>
  );
};
