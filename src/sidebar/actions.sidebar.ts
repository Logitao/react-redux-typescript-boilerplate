import { action, Action, ActionPayload } from '../util/utils.actions';

export const TOGGLE_SIDEBAR = '[SIDEBAR] TOGGLE_SIDEBAR';
export const toggleSideBar = () => action(TOGGLE_SIDEBAR) as Action;

export const SET_SIDEBAR = '[SIDEBAR] SET_SIDEBAR';
export const setSideBar = (sideBarState: boolean) =>
  action(SET_SIDEBAR, sideBarState) as ActionPayload<boolean>;
