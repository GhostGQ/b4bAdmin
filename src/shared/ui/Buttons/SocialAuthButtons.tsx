import {AppleIcon, GoogleIcon} from '@shared/assets/icons';

export const SocialAuthButtons = () => {
  return (
    <div>
      <button className='flex justify-center border border-[#D9D9D9] items-center gap-3 w-full mb-[16px] text-sm font-semibold h-[48px] bg-white rounded-[12px] text-black'>
        <img src={GoogleIcon} alt='Google' width={'24px'} height={'24px'} />
        Google bilan davom etish
      </button>
      <button className='flex justify-center border border-[#D9D9D9] items-center gap-3 w-full mb-[16px] text-sm font-semibold h-[48px] bg-white rounded-[12px] text-black'>
        <img src={AppleIcon} alt='Apple' width={'24px'} height={'24px'} />
        Apple bilan davom etish
      </button>
    </div>
  );
};

