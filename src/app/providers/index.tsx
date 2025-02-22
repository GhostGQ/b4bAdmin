import {StoreProvider} from './StoreProvider';
import {RouterProvider} from './RouterProvider';
import {UserProvider} from './UserProvider';
import {ThemeProvider} from './ThemeProvider';

export const AppProviders = () => {
  return (
    <StoreProvider>
      <ThemeProvider>
        <UserProvider>
          <RouterProvider />
        </UserProvider>
      </ThemeProvider>
    </StoreProvider>
  );
};
