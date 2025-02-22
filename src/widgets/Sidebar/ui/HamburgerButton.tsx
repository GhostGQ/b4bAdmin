import {screenSizes} from '@shared/lib';
import {Turn as Hamburger} from 'hamburger-react';

interface Props {
  isOpen: boolean;
  handleClick: () => void;
}

const HumburgerButton = ({handleClick, isOpen}: Props) => {
  const {lg} = screenSizes();

  return (
    <button onClick={handleClick} className='lg:ml-4 ml-3'>
      <Hamburger size={lg ? 18 : 24} toggled={isOpen} />
    </button>
  );
};

export default HumburgerButton;
