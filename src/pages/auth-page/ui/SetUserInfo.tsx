import {SetUserInfo} from '@features/register-form';

export const SetUserInfoPage = () => {
  return (
    <div className='mt-[36px]'>
      <div>
        <h3 className='text-2xl font-semibold'>Ma’umotlaringizni kiriting</h3>
        <p className='text-[#999] font-medium text-sm mt-[8px]'>
          Maydonlarga o’zngiz haqingizda ma’lumotlar bilan to’ldiring
        </p>
      </div>
      <SetUserInfo />
    </div>
  );
};
