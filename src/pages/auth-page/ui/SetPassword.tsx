import {SetPassword} from '@features/register-form';
import {useLocation} from 'react-router';

export const SetPasswordPage = () => {
  const {state} = useLocation();

  return (
    <div className='mt-[36px]'>
      <div>
        <h3 className='text-2xl font-semibold'>Yangi Parol</h3>
        <p className='text-[#999] font-medium text-sm mt-[8px]'>
          Hisobingiz uchun yangi parol o’ylang. Parolingiz kamida 8 xona
          bo’lishi zarur.
        </p>
      </div>
      <SetPassword state={state} />
    </div>
  );
};
