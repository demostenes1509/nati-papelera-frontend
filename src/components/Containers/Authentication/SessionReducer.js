import { UserSessionTypes } from './SessionActions';

const initialState = {
  isLoggedIn: false,
  isAdmin: false,
  fullName: null,
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case UserSessionTypes.NOT_LOGGED_IN:
      return {
        isLoggedIn: false,
        isAdmin: false,
        fullName: null,
      };
    case UserSessionTypes.LOGGED_IN:
      return {
        isLoggedIn: true,
        isAdmin: action.payload.isAdmin,
        fullName: action.payload.fullName,
      };
    default:
      return state;
  }
};

export default {
  login,
};
