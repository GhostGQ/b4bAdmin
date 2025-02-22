import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';

export const Header = () => {
  return (
    <header
      id='header'
      className='bg-bg-primary dark:bg-bg-primary-dark fixed top-0 left-0 z-10 flex p-4 w-full h-[64px] 
        border-b border-[#E9E9E9] dark:border-[#333333]'
    >
      <div className='w-full flex justify-between'>
        <HeaderLeft />
        <HeaderRight />
      </div>
    </header>
  );
};
