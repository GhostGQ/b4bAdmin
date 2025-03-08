import {FC, ReactNode} from 'react';
import { AddButton } from '../Buttons';

interface Props {
  title: string;
  buttonText: string;
  isEmpty: boolean;
  isLoading: boolean;
}

export const PageHeader: FC<Props> = props => {
  const {title, buttonText, isEmpty, isLoading} = props;

  if (isLoading && isLoading) return;

  return (
    <div>
      <h1 className='text-[24px] font-semibold mb-6'>{title}</h1>
      {!isEmpty && (
        <AddButton toPath={'yaratish'} plus={true} text={buttonText} />
      )}
    </div>
  );
};
