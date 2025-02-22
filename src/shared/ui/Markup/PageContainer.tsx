import {FC, ReactNode} from 'react';

export const PageContainer: FC<{children: ReactNode}> = ({children}) => {
  return <div className='p-[24px] h-[calc(100%-64px)] w-full'>{children}</div>;
};
