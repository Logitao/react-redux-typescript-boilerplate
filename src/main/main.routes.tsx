import * as React from 'react';
import { Route } from 'react-router-dom';
import { RouteObject } from '../models/models.routes';

/**
 *
 *
 * @interface Props
 */
interface Props {
  /**
   *
   *
   * @type {RouteObject[]}
   * @memberof Props
   */
  routes: RouteObject[];
}

/**
 * Componente de rotas
 *
 * @returns {JSX.Element} Rotas
 */
export const Routes = (props: Props): JSX.Element => (
  <>
    {props.routes.map((singleRoute, index) => (
      <Route
        key={index}
        path={singleRoute.path}
        component={singleRoute.component}
      />
    ))}
  </>
);
