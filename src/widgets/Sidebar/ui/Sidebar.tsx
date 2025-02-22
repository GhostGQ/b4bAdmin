import {NavigationTree} from '../config/navigation-tree';
import {ISidebarItem} from '../types/types';
import {motion} from 'motion/react';

import HumburgerButton from './HamburgerButton';
import SideBarItem from './SidebarItem';
import {SidebarBg} from '@shared/assets/images';

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean | ((isOpen: boolean) => boolean)) => void;
}

export const Sidebar = (props: Props) => {
  const {isOpen, setIsOpen} = props;
  const animation = {
    closed: {width: '80px'},
    opened: {width: '300px'},
  };

  const handleClick = () => {
    setIsOpen((isOpen: boolean) => (isOpen = !isOpen));
  };

  return (
    <motion.div
      style={{
        backgroundImage: `url(${SidebarBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className='bg-white z-10 text-white pt-6 h-full fixed top-[64px] left-0 overflow-hidden'
      variants={animation}
      initial={'opened'}
      animate={isOpen ? 'opened' : 'closed'}
      transition={{duration: 0.2, ease: 'easeInOut'}}
    >
      <HumburgerButton handleClick={handleClick} isOpen={isOpen} />
      <div className={`flex justify-between w-full`}>
        <div className='flex flex-col w-full'>
          {NavigationTree?.map((item: ISidebarItem, index) => (
            <SideBarItem
              key={index}
              title={item.title}
              icon={item.icon}
              path={item.path}
              isOpen={isOpen}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};
