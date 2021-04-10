export const SidebarActions = {
  FETCH: 'FETCH_SIDEBAR',
  FETCH_LOADING: 'FETCH_SIDEBAR_LOADING',
  FETCH_SUCCESS: 'FETCH_SIDEBAR_SUCCESS',
  FETCH_ERROR: 'FETCH_SIDEBAR_ERROR',
  SELECT: 'SELECT',
};

const fetch = () => ({ type: SidebarActions.FETCH });
const fetchLoading = () => ({ type: SidebarActions.FETCH_LOADING });
const fetchSuccess = (payload) => ({ type: SidebarActions.FETCH_SUCCESS, payload });
const fetchError = (error) => ({ type: SidebarActions.FETCH_ERROR, error });
const select = (id) => ({ type: SidebarActions.SELECT, id });

export default {
  fetch,
  fetchLoading,
  fetchSuccess,
  fetchError,
  select,
};
