import clsx from 'clsx';
import {FC} from 'react';
import {FieldErrors, UseFormRegister} from 'react-hook-form';

interface IEmailInputProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  required?: boolean;
  margin?: string;
}

const EmailInput: FC<IEmailInputProps> = props => {
  const {register, errors, required = true, margin = '24px 0 16px 0'} = props;
  const emailPattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return (
    <input
      {...register('email', {
        required: required,
        pattern: {
          value: emailPattern,
          message: 'Please enter a valid email',
        },
      })}
      placeholder='Example@gmail.com'
      className={clsx(
        'w-full text-sm font-semibold h-[48px] pl-[16px] border border-[#D9D9D9] rounded-xl focus:outline-none focus:border-2',
        errors.email ? 'border-red-500' : 'border-[#D9D9D9]'
      )}
      style={{margin: margin}}
    />
  );
};

export default EmailInput;
