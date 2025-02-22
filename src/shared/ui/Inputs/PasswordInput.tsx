import clsx from 'clsx';
import {FC, useState} from 'react';
import {FieldErrors, UseFormRegister} from 'react-hook-form';
import {FaEyeSlash, FaEye} from 'react-icons/fa';

interface IPasswordInputProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  name: string;
  placeholder: string;
  confirmPass?: string;
}

const PasswordInput: FC<IPasswordInputProps> = props => {
  const {register, errors, name, placeholder, confirmPass} = props;
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='relative'>
      <input
        {...register(name, {
          required: 'Parol majburiy',
          minLength: {
            value: 8,
            message: 'Parol kamida 8 ta belgidan iborat bo‘lishi kerak.',
          },
          validate: value => {
            if (confirmPass) {
              return value === confirmPass || 'Parollar mos kelmayapti.';
            }
          },
        })}
        type={showPassword ? 'text' : 'password'}
        placeholder={placeholder}
        className={clsx(
          'w-full text-sm font-semibold h-[48px] pl-[16px] border border-[#D9D9D9] rounded-[12px] focus:outline-none focus:border-2',
          errors[name] ? 'border-red-500' : 'border-[#D9D9D9]'
        )}
      />
      <button
        type='button'
        className='absolute top-[14px] right-4'
        onClick={() => setShowPassword(state => (state = !state))}
      >
        {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
      </button>
    </div>
  );
};

export default PasswordInput;
