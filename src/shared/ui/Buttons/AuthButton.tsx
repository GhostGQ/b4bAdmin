import clsx from 'clsx';
import {FC} from 'react';

interface IProps {
  isError: boolean;
  isLoading: boolean;
  text: string;
}

export const AuthButton: FC<IProps> = props => {
  const {isError, isLoading, text} = props;

  return (
    <button
      className={clsx(
        'w-full text-sm font-semibold mt-[16px] h-[48px] bg-[#0165FF] rounded-[12px] text-white',
        !isError ? 'bg-[#0165FF]' : 'bg-[#0165FF]/50'
      )}
      type='submit'
    >
      {isLoading ? 'Loading...' : text}
    </button>
  );
};