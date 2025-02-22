import {useTheme} from '@app/providers/ThemeProvider';

export const SwitchTheme = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className=''>
      <button
        onClick={toggleTheme}
        className='p-2 rounded bg-primary text-black '
      >
        {theme === 'light' ? 'Светлая тема' : 'Темная тема'}
      </button>
    </div>
  );
};
