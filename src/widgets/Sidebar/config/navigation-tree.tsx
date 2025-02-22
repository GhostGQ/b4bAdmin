import {RiDashboard3Fill} from 'react-icons/ri';
import {FaFile} from 'react-icons/fa';
import {PiBuildingOfficeFill} from 'react-icons/pi';
import {IoBulbSharp} from 'react-icons/io5';
import {FaUserTie} from 'react-icons/fa';
import {HiChatBubbleLeftEllipsis} from 'react-icons/hi2';
import {GoBellFill} from 'react-icons/go';
import {IoMdSettings} from 'react-icons/io';

export const NavigationTree = [
  {
    title: 'Dashboard',
    path: '#',
    icon: <RiDashboard3Fill />,
  },
  {
    title: 'E’lonlarim',
    path: 'elonlarim',
    icon: <FaFile />,
  },
  {
    title: 'Korxonalarim',
    path: 'korxonalarim',
    icon: <PiBuildingOfficeFill />,
  },
  {
    title: 'Investpaketlarim',
    path: 'investpaketlarim',
    icon: <IoBulbSharp />,
  },
  {
    title: 'Mutaxsis',
    path: 'mutaxsis',
    icon: <FaUserTie />,
  },
  {
    title: 'Chat',
    path: 'chat',
    icon: <HiChatBubbleLeftEllipsis />,
  },
  {
    title: 'Bildiroshnomalar',
    path: 'bildiroshnomalar',
    icon: <GoBellFill />,
  },
  {
    title: 'Sozlamalar',
    path: 'sozlamalar',
    icon: <IoMdSettings />,
  },
];
