import {RouteObject} from 'react-router';
import {RequireAuth} from '@features/require-auth';
import {
  LoginPage,
  RegisterPage,
  SetPasswordPage,
  SetUserInfoPage,
  VerifyPage,
} from '@pages/index';
import {ROUTES} from '@shared/config/routes';
import {AuthLayout} from '@widgets/Layout/AuthLayout';
import DashboardLayout from '@widgets/Layout/DashboardLayout';

export const routes: RouteObject[] = [
  {
    element: <RequireAuth />,
    children: [
      {
        element: <DashboardLayout />,
        path: ROUTES.MAIN.ROOT,
        children: [
          {
            index: true,
            // element: <Dashboard />
          },
          {
            path: ROUTES.MAIN.ADVERTISEMENTS,
            // element: <Advertisement />
          },
          {
            path: ROUTES.MAIN.ENTERPRISES,
            // element: <Enterprices />
          },
          {
            path: ROUTES.MAIN.INVEST_PACKAGES,
            // element: <Investpacket />
          },
        ],
      },
      {
        // element: <HeaderLayout />,
        children: [
          {
            path: ROUTES.NESTED.ADD_BUILDING,
            // element: <AddBuilding />,
          },
          {
            path: ROUTES.NESTED.ADD_CAR,
            // element: <AddCar />
          },
          {
            path: ROUTES.NESTED.CREATE_ENTERPRISE,
            // element: <AddEnterprice />
          },
          {
            path: ROUTES.NESTED.ENTERPRISE_DETAILS,
            // element: <CompanyDetails />,
          },
          {
            path: ROUTES.NESTED.CREATE_INVEST_PACKAGE,
            // element: <AddInvestpaket />,
          },
          {
            path: ROUTES.NESTED.INVEST_PACKAGE_DETAILS,
            // element: <InvestpaketDetails />,
          },
        ],
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {path: ROUTES.AUTH.SIGN_IN, element: <LoginPage />},
      {path: ROUTES.AUTH.SIGN_UP, element: <RegisterPage />},
      {path: ROUTES.AUTH.VERIFY, element: <VerifyPage />},
      {path: ROUTES.AUTH.SET_PASSWORD, element: <SetPasswordPage />},
      {path: ROUTES.AUTH.SET_USER_INFO, element: <SetUserInfoPage />},
    ],
  },
  {
    path: ROUTES.ERROR,
    // element: <Error />,
  },
];
