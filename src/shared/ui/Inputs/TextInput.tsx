import clsx from 'clsx';
import {FieldErrors, UseFormRegister} from 'react-hook-form';

interface ITextInputProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  required?: boolean;
  margin?: string;
  name: string;
  placeholder: string;
  rules?: Object;
  fontSize?: string;
  type?: string;
}

const TextInput = (props: ITextInputProps) => {
  const {
    register,
    errors,
    name,
    placeholder,
    rules,
    required = true,
    fontSize = '13px',
    margin = '0',
    type = 'text',
  } = props;

  return (
    <input
      {...register(name, {
        required: required,
        ...rules,
      })}
      type={type}
      placeholder={placeholder}
      className={clsx(
        `w-full block text-[${fontSize}] font-semibold h-[48px] pl-[16px] border border-[#D9D9D9] rounded-[12px] focus:outline-none focus:border-2`,
        errors[name] ? 'border-red-500' : 'border-[#D9D9D9]'
      )}
      style={{margin: margin}}
    />
  );
};

export default TextInput;
