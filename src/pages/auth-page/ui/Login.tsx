import {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {AuthWithEmail, AuthWithPhone} from '@features/auth-form';
import {AuthTabs} from '@shared/ui/Tabs';
import {SocialAuthButtons} from '@shared/ui/Buttons';
import {ROUTES} from '@shared/config/routes';

export const LoginPage = () => {
  const [activeTab, setActiveTab] = useState<string>('tab1');

  return (
    <div className='mt-[36px]'>
      <h1 className='font-semibold text-2xl text-black'>Kirish</h1>
      <p className='text-sm text-[#999999] font-medium mt-[8px]'>
        Kirish uchun login va parolingizni kiriting
      </p>

      <div className='mt-[32px]'>
        {/* Табы переключения */}
        <AuthTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {/* Контент табов */}
        <div className='tabs-contents'>
          {activeTab === 'tab1' ? <AuthWithPhone /> : <AuthWithEmail />}
        </div>
      </div>

      {/* Кнопки входа через соцсети */}
      <div className='auth-footer mt-[24px]'>
        <SocialAuthButtons />

        {/* Ссылка на регистрацию */}
        <p className='text-sm text-black font-semibold text-center'>
          Sizda akkaunt bormi?
          <NavLink to={ROUTES.AUTH.SIGN_UP} className='pl-[6px] text-[#0165FF]'>
            Ro’yxatdan o’tish
          </NavLink>
        </p>
      </div>
    </div>
  );
};
