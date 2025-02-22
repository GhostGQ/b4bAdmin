import {FC, ReactNode} from 'react';
import AddButton from '../Buttons/AddButton';

interface Props {
  title: string;
  buttonText: string;
  isEmpty: boolean;
  isLoading: boolean;
  children: ReactNode;
}

const PageHeader: FC<Props> = props => {
  const {title, buttonText, isEmpty, isLoading, children} = props;

  if (isLoading && isLoading) return;

  return (
    <div>
      <h1 className='text-[24px] font-semibold mb-6'>{title}</h1>
      {children}
      {!isEmpty && (
        <AddButton toPath={'yaratish'} plus={true} text={buttonText} />
      )}
    </div>
  );
};

export default PageHeader;
