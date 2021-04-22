export const SideBarActions = {
  FETCH: 'FETCH_SIDEBAR',
  FETCH_LOADING: 'FETCH_SIDEBAR_LOADING',
  FETCH_SUCCESS: 'FETCH_SIDEBAR_SUCCESS',
  FETCH_ERROR: 'FETCH_SIDEBAR_ERROR',
  SELECT: 'SELECT',
};

const fetch = () => ({ type: SideBarActions.FETCH });
const fetchLoading = () => ({ type: SideBarActions.FETCH_LOADING });
const fetchSuccess = (payload) => ({ type: SideBarActions.FETCH_SUCCESS, payload });
const fetchError = (error) => ({ type: SideBarActions.FETCH_ERROR, error });
const select = (id) => ({ type: SideBarActions.SELECT, id });

export default {
  fetch,
  fetchLoading,
  fetchSuccess,
  fetchError,
  select,
};
