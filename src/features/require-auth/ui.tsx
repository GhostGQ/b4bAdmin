import {Navigate, Outlet} from 'react-router';
import {getAccessToken} from '@shared/lib';
import {ROUTES} from '@shared/config/routes';

export const RequireAuth = () => {
  const token = getAccessToken();

  if (!token) {
    return <Navigate to={ROUTES.AUTH.SIGN_IN} />;
  }

  return <Outlet />;
};
