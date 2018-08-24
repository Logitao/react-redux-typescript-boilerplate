import * as React from 'react';
import { Route } from 'react-router-dom';
import { IRouteObject } from '../models/models.routes';

/**
 *
 *
 * @interface Props
 */
interface IProps {
  /**
   *
   *
   * @type {IRouteObject[]}
   * @memberof Props
   */
  routes: IRouteObject[];
}

/**
 * Componente de rotas
 *
 * @returns {JSX.Element} Rotas
 */
export const Routes = (props: IProps): JSX.Element => (
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
