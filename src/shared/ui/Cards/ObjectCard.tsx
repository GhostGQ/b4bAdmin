import {ReactNode} from 'react';
import {Link} from 'react-router';
import {formatDateTime} from '@shared/lib';
import {FaArrowRight} from 'react-icons/fa';
import {RiGovernmentFill} from 'react-icons/ri';

interface IItem {
  id: number;
  name?: string;
  title?: string;
  created_at: Date;
  finish: boolean;
}

interface Props {
  item: IItem;
  onEdit: () => void;
  onDelete: () => void;
  children: ReactNode;
}

const ObjectCard = (props: Props) => {
  const {item, onEdit, onDelete, children} = props;

  return (
    <div className='relative bg-white p-3 pb-10 rounded-xl w-full sm:min-w-[160px] flex flex-col cursor-pointer'>
      <div>
        <RiGovernmentFill size={18} color='#0165FF' />
        <span className='text-[12px] font-semibold'>Nomi</span>
        <h3 className='text-[#0165FF] text-[14px] font-semibold'>
          {item.name || item.title}
        </h3>
      </div>
      {item?.finish === false && (
        <Link
          to={`xonadonlar/${item.id}`}
          state={item.id}
          className='text-[#0165FF] text-[14px] font-semibold mt-3 flex items-center gap-2'
        >
          <span>Yaratishni davom eting</span>
          <FaArrowRight />
        </Link>
      )}

      <span className='text-[#BDBDBD] text-[12px] font-semibold absolute bottom-3 right-3'>
        {formatDateTime(item.created_at)}
      </span>

      {children}
    </div>
  );
};

export default ObjectCard;
