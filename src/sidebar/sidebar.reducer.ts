import { AppState, initialState } from '../app.state';
import { ActionPayload, Action } from '../util/utils.actions';
import { TOGGLE_SIDEBAR, SET_SIDEBAR } from './actions.sidebar';
export const sideBarReducer = (
  state: AppState = initialState,
  action: ActionPayload<boolean> | Action
) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR: {
      return {
        ...state,
        sidebar: !state.sidebar
      };
    }
    case SET_SIDEBAR: {
      return {
        ...state,
        sidebar: (action as ActionPayload<boolean>).payload
      };
    }
    default:
      return state;
  }
};
