/**
 *
 * Estrutura básica de um objeto de rota
 * @exports
 * @interface RouteObject
 */
export interface RouteObject {
  /**
   * O Caminho da rota
   *
   * @type {string}
   * @memberof RouteObject
   */
  path: string;
  /**
   * O componente para ser renderizado na rota
   *
   * @type {React.ComponentClass}
   * @memberof RouteObject
   */
  component: React.ComponentClass;
}
