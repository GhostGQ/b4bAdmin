import {FC} from 'react';
import clsx from 'clsx';

interface AuthTabsProps {
  activeTab: string;
  setActiveTab: (tab: 'tab1' | 'tab2') => void;
}

export const AuthTabs: FC<AuthTabsProps> = props => {
  const {activeTab, setActiveTab} = props;

  return (
    <div className='tabs-control flex'>
      <button
        onClick={() => setActiveTab('tab1')}
        className={clsx(
          'text-xs font-semibold flex-1 w-[150px] h-[48px] bg-white cursor-pointer',
          activeTab === 'tab1' && 'active-tab'
        )}
      >
        Telefon raqam
      </button>
      <button
        onClick={() => setActiveTab('tab2')}
        className={clsx(
          'text-xs font-semibold flex-1 w-[150px] h-[48px] bg-white cursor-pointer',
          activeTab === 'tab2' && 'active-tab'
        )}
      >
        E-mail
      </button>
    </div>
  );
};
