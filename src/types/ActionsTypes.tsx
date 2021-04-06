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
