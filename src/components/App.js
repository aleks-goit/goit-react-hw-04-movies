import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Loader from '../components/Loader';
import routes from '../routes';

const Home = lazy(() => import('../views/Home'));
const Movies = lazy(() => import('../views/Movies'));
const MovieDetailsPage = lazy(() => import('../views/MovieDetailsPage'));

const App = () => (
  <>
    <Navigation />
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route path={routes.home} exact component={Home} />
        <Route path={routes.movies} exact component={Movies} />
        <Route path={routes.movie} component={MovieDetailsPage} />
      </Switch>
    </Suspense>
  </>
);
export default App;
