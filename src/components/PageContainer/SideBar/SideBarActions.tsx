import { Action, ActionTypes, FetchActions } from '../../../types/ActionsTypes';

export const SidebarTypes: ActionTypes = {
  FETCH: 'FETCH_SIDEBAR',
  FETCH_LOADING: 'FETCH_SIDEBAR_LOADING',
  FETCH_SUCCESS: 'FETCH_SIDEBAR_SUCCESS',
  FETCH_ERROR: 'FETCH_SIDEBAR_ERROR',
};

interface Category {
  id: number;
  name: string;
  url: string;
  products: Array<Product>;
}
interface Product {
  id: number;
  name: string;
  url: string;
}
export class SidebarPayload {
  categories: Array<Category> = [];
}

const SidebarFetchActions: FetchActions<SidebarPayload> = {
  fetch: (): Action<SidebarPayload> => ({ type: SidebarTypes.FETCH }),
  fetchLoading: (): Action<SidebarPayload> => ({ type: SidebarTypes.FETCH_LOADING }),
  fetchSuccess: (p: SidebarPayload): Action<SidebarPayload> => ({ type: SidebarTypes.FETCH_SUCCESS, payload: p }),
  fetchError: (e: string): Action<SidebarPayload> => ({ type: SidebarTypes.FETCH_ERROR, error: e }),
};

export default SidebarFetchActions;
