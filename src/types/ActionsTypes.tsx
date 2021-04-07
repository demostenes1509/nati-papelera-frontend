export interface ActionTypes {
  FETCH: string;
  FETCH_LOADING: string;
  FETCH_SUCCESS: string;
  FETCH_ERROR: string;
}
export interface Action<P> {
  type: string;
  payload?: P;
  error?: string;
}
export interface FetchActions<P> {
  fetch: () => Action<P>;
  fetchLoading: () => Action<P>;
  fetchSuccess: (payload: P) => Action<P>;
  fetchError: (error: string) => Action<P>;
}
