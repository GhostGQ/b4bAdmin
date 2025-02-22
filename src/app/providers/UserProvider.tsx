import {createContext, useContext, useEffect, useState} from 'react';
import {IUser} from '@entities/user';
import {useLazyGetMeQuery} from '@entities/user';
import {getUserCookie, setUserCookie} from '@shared/lib/cookies/userCookies';

interface UserContextProps {
  user: IUser | null;
  userName: string | null;
}

const UserContext = createContext<UserContextProps>({
  user: null,
  userName: null,
});

export const UserProvider = ({children}: {children: React.ReactNode}) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const [trigger] = useLazyGetMeQuery();

  useEffect(() => {
    const storedUser = getUserCookie();
    if (storedUser) {
      setUser(storedUser);
      setUserName(
        `${storedUser.first_name} ${storedUser.last_name.slice(0, 1)}.`
      );
    } else {
      trigger(null).then(res => {
        if (res?.data) {
          const newUser = res.data as IUser;
          setUserCookie(newUser);
          setUser(newUser);
          setUserName(
            `${newUser.first_name} ${newUser.last_name.slice(0, 1)}.`
          );
        }
      });
    }
  }, []);

  return (
    <UserContext.Provider value={{user, userName}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
