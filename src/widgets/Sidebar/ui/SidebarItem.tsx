import {NavLink} from 'react-router';
import {motion} from 'motion/react';
import {ISidebarItem} from '../types/types';

interface Props extends ISidebarItem {
  isOpen: boolean;
}

const SideBarItem = (props: Props) => {
  const {title, path, icon, isOpen} = props;

  const variants = {
    closed: {visibility: 'hidden' as const, width: 0, opacity: 0},
    opened: {visibility: 'visible' as const, width: 'fit-content', opacity: 1},
  };

  return (
    <NavLink
      to={`/${path.toLowerCase()}`}
      className='w-full hover:text-white'
      style={({isActive}) => ({
        textDecoration: 'none',
        color: isActive ? 'white' : '#FFFFFF70',
      })}
    >
      <div className='py-[20px] pl-[24px] w-full flex items-center gap-2 border-b-[1px] border-[#FFFFFF30]'>
        <span className='text-[clamp(25px,4vw,30px)]'>{icon}</span>
        <motion.span
          className='text-[clamp(14px,4vw,18px)] font-semibold'
          variants={variants}
          initial={'opened'}
          animate={isOpen ? 'opened' : 'closed'}
          transition={{duration: 0.3, ease: 'easeInOut'}}
        >
          {title}
        </motion.span>
      </div>
    </NavLink>
  );
};

export default SideBarItem;
