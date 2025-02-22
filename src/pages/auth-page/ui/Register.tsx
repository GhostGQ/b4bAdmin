import {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {AuthTabs} from '@shared/ui/Tabs';
import {SocialAuthButtons} from '@shared/ui/Buttons';
import {ROUTES} from '@shared/config/routes';
import {RegisterWithEmail, RegisterWithPhone} from '@features/register-form';

export const RegisterPage = () => {
  const [activeTab, setActiveTab] = useState<string>('tab1');

  return (
    <div className='mt-[36px]'>
      <h1 className='font-semibold text-2xl text-black'>Ro’yxatdan o’tish</h1>
      <p className='text-sm text-[#999999] font-medium mt-[8px]'>
        Ro’yxatdan o’tish uchun avval email pochtangizni kiriting
      </p>

      <div className='mt-[32px]'>
        {/* Табы переключения */}
        <AuthTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {/* Контент табов */}
        <div className='tabs-contents'>
          {activeTab === 'tab1' ? <RegisterWithPhone /> : <RegisterWithEmail />}
        </div>
      </div>

      {/* Кнопки входа через соцсети */}
      <div className='auth-footer mt-[24px]'>
        <SocialAuthButtons />

        {/* Ссылка на регистрацию */}
        <p className='text-sm text-black font-semibold text-center'>
          Sizda akkaunt bormi?
          <NavLink to={ROUTES.AUTH.SIGN_IN} className='pl-[6px] text-[#0165FF]'>
            Kirish
          </NavLink>
        </p>
      </div>
    </div>
  );
};
