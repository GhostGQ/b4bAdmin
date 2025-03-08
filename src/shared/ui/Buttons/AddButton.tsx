import {Link} from 'react-router';
import {LuPlus} from 'react-icons/lu';

interface Props {
  plus: boolean;
  text: string;
  toPath: string;
}

export const AddButton = ({plus, text, toPath}: Props) => {
  return (
    <Link
      to={toPath}
      className='w-fit py-3 px-4 bg-[#0165FF] rounded-lg text-white text-[14px] font-semibold flex items-center gap-2'
    >
      <span>{text}</span> {plus && <LuPlus size={20} />}
    </Link>
  );
};

