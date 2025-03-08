import {FC, ReactNode} from 'react';

interface Props {
  children: ReactNode;
}

export const PageCardsList: FC<Props> = props => {
  const {children} = props;

  return (
    <div className='grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 mt-6'>
      {children}
    </div>
  );
};

