import {RegisterVerify} from '@features/register-form';

export const VerifyPage = () => {
  return (
    <div className='mt-[36px]'>
      <div>
        <h3 className='text-2xl font-semibold'>Tasdiqlash ko’dini kiriting</h3>
        <p className='text-[#999] font-medium text-sm mt-[8px]'>
          Pochtangizga raqamiga 6 xonali tasdiqlash ko’di yubordik iltimos uni
          kiriting
        </p>
      </div>
      <RegisterVerify />
    </div>
  );
};
