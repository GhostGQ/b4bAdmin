import {FC} from 'react';
import {Outlet} from 'react-router-dom';
import {screenSizes} from '@shared/lib';
import {Logo, AuthBg} from '@shared/assets/images';

export const AuthLayout: FC = () => {
  const {mobile} = screenSizes();

  return (
    <div className='auth min-h-screen flex bg-white'>
      <div className='w-full lg:max-w-[620px] m-auto'>
        <div className='w-3/4 sm:w-2/3 m-auto'>
          <div className='logo'>
            <img src={Logo} alt='logo' width={110} height={44} />
          </div>
          <Outlet />
        </div>
      </div>
      {!mobile && (
        <div
          className={`w-full bg-cover bg-no-repeat h-screen bg-center`}
          style={{backgroundImage: `url(${AuthBg})`}}
        ></div>
      )}
    </div>
  );
};
