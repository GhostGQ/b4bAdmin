import {useState} from 'react';
import {screenSizes} from '@shared/lib';
import {Header} from '@widgets/Header';
import {Sidebar} from '@widgets/Sidebar';
import {motion} from 'motion/react';
import {Outlet} from 'react-router';
import {ToastContainer} from 'react-toastify';

const DashboardLayout = () => {
  const {md} = screenSizes();
  const [isOpen, setIsOpen] = useState(true);

  const animation = {
    opened: {paddingLeft: !md ? 300 : 0},
    closed: {paddingLeft: !md ? 80 : 0},
  };

  return (
    <div className='dashboard-layout relative w-screen h-screen overflow-x-hidden'>
      <Header />
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <ToastContainer
        position='top-right'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme='light'
      />

      <motion.main
        className={`h-full pt-16 overflow-y-auto pl-[80px] lg:pl-0 bg-bg-secondary dark:bg-bg-secondary-dark`}
        variants={animation}
        initial={'opened'}
        animate={isOpen ? 'opened' : 'closed'}
        transition={{duration: 0.2, ease: 'easeInOut'}}
      >
        <Outlet />
      </motion.main>
    </div>
  );
};

export default DashboardLayout;
