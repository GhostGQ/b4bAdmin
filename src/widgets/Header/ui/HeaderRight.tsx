import {useUser} from '@app/providers/UserProvider';
import {LogoutButton} from '@features/logout-btn';
// import {SwitchTheme} from '@features/switch-theme/ui';
import {FaBell, FaUser} from 'react-icons/fa';

const HeaderRight = () => {
  const {userName} = useUser();

  return (
    <div className='flex gap-3 items-start'>
      <LogoutButton />
      <button className='cursor-pointer'>
        <FaBell
          size={34}
          color='#0165FF'
          className='bg-[#0165FF]/10 p-2 rounded-full'
        />
      </button>
      <button className='flex gap-2 items-center cursor-pointer'>
        <FaUser
          size={34}
          color='#0165FF'
          className='bg-[#0165FF]/10 p-2 rounded-full'
        />
        <span className='text-[14px] font-semibold whitespace-nowrap'>
          {userName}
        </span>
      </button>
    </div>
  );
};

export default HeaderRight;
