import * as React from 'react';
import { lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));

const Routes = (): JSX.Element => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="*" component={() => <h1>Erro 404</h1>} />
        </Switch>
      </BrowserRouter>
    </React.Suspense>
  );
};
export default Routes;
