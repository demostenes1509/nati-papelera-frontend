import { Action, ActionTypes } from '../../../types/ActionsTypes';

export const SidebarTypes: ActionTypes = {
  FETCH: 'FETCH_SIDEBAR',
  FETCH_LOADING: 'FETCH_SIDEBAR_LOADING',
  FETCH_SUCCESS: 'FETCH_SIDEBAR_SUCCESS',
  FETCH_ERROR: 'FETCH_SIDEBAR_ERROR',
};

export class SidebarPayload {
  categories: Array<string> = [];
}

const fetch = (): Action<SidebarPayload> => ({ type: SidebarTypes.FETCH });
const fetchLoading = (): Action<SidebarPayload> => ({ type: SidebarTypes.FETCH_LOADING });
const fetchSuccess = (payload: SidebarPayload): Action<SidebarPayload> => ({
  type: SidebarTypes.FETCH_SUCCESS,
  payload,
});
const fetchError = (error: string): Action<SidebarPayload> => ({ type: SidebarTypes.FETCH_ERROR, error });

export default {
  fetch,
  fetchLoading,
  fetchSuccess,
  fetchError,
};
