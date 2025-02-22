import {Link} from 'react-router';
import {Logo} from '@shared/assets/images';
import {ROUTES} from '@shared/config/routes';

const HeaderLeft = () => {
  return (
    <div className='w-full flex justify-between gap-3'>
      <Link to={ROUTES.MAIN.DASHBOARD} className='w-[150px]'>
        <img src={Logo} className='h-[30px]' alt='' />
      </Link>
    </div>
  );
};

export default HeaderLeft;
