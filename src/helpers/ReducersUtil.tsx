const defaultFetch = (initialState, state, action, types) => {
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

const defaultPost = (initialState, state, action, types) => {
  switch (action.type) {
    case types.POST:
      return {
        waiting: true,
        request: initialState.request,
        response: initialState.response,
        error: null,
      };
    case types.POST_SUCCESS:
      return {
        waiting: false,
        response: action.response,
        error: null,
      };
    case types.POST_ERROR:
      return {
        waiting: false,
        error: action.error,
        response: {},
      };
    default:
      return state;
  }
};

const defaultPut = (initialState, state, action, types) => {
  switch (action.type) {
    case types.PUT:
      return {
        waiting: true,
        request: initialState.request,
        response: initialState.response,
        error: null,
      };
    case types.PUT_SUCCESS:
      return {
        waiting: false,
        response: action.response,
        error: null,
      };
    case types.PUT_ERROR:
      return {
        waiting: false,
        error: action.error,
        response: {},
      };
    default:
      return state;
  }
};

export default {
  defaultFetch,
  defaultPost,
  defaultPut,
};
