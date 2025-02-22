type RoutesConfig = {
  readonly AUTH: {
    readonly SIGN_IN: string;
    readonly SIGN_UP: string;
    readonly VERIFY: string;
    readonly SET_PASSWORD: string;
    readonly SET_USER_INFO: string;
  };
  readonly MAIN: {
    readonly ROOT: string;
    readonly DASHBOARD: string;
    readonly ADVERTISEMENTS: string;
    readonly ENTERPRISES: string;
    readonly INVEST_PACKAGES: string;
  };
  readonly NESTED: {
    readonly ADD_BUILDING: string;
    readonly ADD_CAR: string;
    readonly CREATE_ENTERPRISE: string;
    readonly ENTERPRISE_DETAILS: string;
    readonly CREATE_INVEST_PACKAGE: string;
    readonly INVEST_PACKAGE_DETAILS: string;
  };
  readonly ERROR: string;
};

export const ROUTES: RoutesConfig = {
  AUTH: {
    SIGN_IN: '/signin',
    SIGN_UP: '/signup',
    VERIFY: '/verify',
    SET_PASSWORD: '/set-password',
    SET_USER_INFO: '/set-user-info',
  },
  MAIN: {
    ROOT: '/',
    DASHBOARD: '/',
    ADVERTISEMENTS: '/elonlarim',
    ENTERPRISES: '/korxonalarim',
    INVEST_PACKAGES: '/investpaketlarim',
  },
  NESTED: {
    ADD_BUILDING: '/elonlarim/xonadonlar/:id',
    ADD_CAR: '/elonlarim/avtomobillar/:id',
    CREATE_ENTERPRISE: '/korxonalarim/yaratish',
    ENTERPRISE_DETAILS: '/korxonalarim/:name',
    CREATE_INVEST_PACKAGE: '/investpaketlarim/yaratish',
    INVEST_PACKAGE_DETAILS: '/investpaketlarim/:name',
  },
  ERROR: '*',
} as const;

type RouteParams = {
  '/elonlarim/xonadonlar/:id': {id: string | number};
  '/elonlarim/avtomobillar/:id': {id: string | number};
  '/korxonalarim/:name': {name: string};
  '/investpaketlarim/:name': {name: string};
};

type Path = keyof RouteParams;

export const buildRoute = <T extends Path>(
  path: T,
  params: RouteParams[T]
): string => {
  return Object.entries(params).reduce(
    (acc, [key, value]) => acc.replace(`:${key}`, String(value)),
    path as string
  );
};
