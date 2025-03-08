import {FaPen} from 'react-icons/fa';

export const EditButtonIcon = props => {
  const {item, bgWhite, onEdit} = props;

  return (
    <button
      type='button'
      className='text-[#000] hover:bg-[#0165FF] hover:text-[#0165FF] 
              hover:bg-opacity-[10%] text-opacity-40 p-[8px] rounded-lg transition-colors duration-200'
      style={{backgroundColor: bgWhite ? '' : '#e0e0e0'}}
      onClick={() => onEdit(item)}
    >
      <FaPen size={18} />
    </button>
  );
};
