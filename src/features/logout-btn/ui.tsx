import {useAppDispatch} from '@app/store/hooks';
import {ROUTES} from '@shared/config/routes';
import {logOut} from '@shared/slices/auth-slice';
import {IoIosLogOut} from 'react-icons/io';
import {useNavigate} from 'react-router';

export const LogoutButton = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(logOut());
    navigate(ROUTES.AUTH.SIGN_IN);
  };

  return (
    <button onClick={handleClick} className='cursor-pointer'>
      <IoIosLogOut
        size={36}
        color='#0165FF'
        className='bg-[#0165FF]/10 p-2 rounded-full'
      />
    </button>
  );
};
