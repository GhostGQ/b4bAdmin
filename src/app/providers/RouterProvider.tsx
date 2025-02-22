import {RouterProvider as ReactRouterProvider} from 'react-router-dom';
import {AppRouter} from '@app/routes/AppRouter';
import {Suspense} from 'react';

export const RouterProvider = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ReactRouterProvider router={AppRouter} />
    </Suspense>
  );
};
