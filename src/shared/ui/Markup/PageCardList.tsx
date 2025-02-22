import {FC, ReactNode} from 'react';

interface Props {
  cards: Object[];
  children: ReactNode;
}

const PageCardsList: FC<Props> = props => {
  const {cards, children} = props;

  if (!cards) return;

  return (
    <div className='grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 mt-6'>
      {children}
    </div>
  );
};

export default PageCardsList;
