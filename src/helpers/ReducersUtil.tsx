import { Action, ActionTypes } from '../types/ActionsTypes';
import { State } from '../types/StateTypes';

const defaultFetch = <P,>(initialState: State<P>, state: State<P>, action: Action<P>, types: ActionTypes): State<P> => {
  switch (action.type) {
    case types.FETCH:
      return {
        loading: true,
        payload: initialState.payload,
        error: null,
      };
    case types.FETCH_SUCCESS:
      return {
        loading: false,
        payload: action.payload,
        error: null,
      };
    case types.FETCH_ERROR:
      return {
        loading: false,
        error: action.error,
        payload: initialState.payload,
      };
    default:
      return state;
  }
};

export default {
  defaultFetch,
};
