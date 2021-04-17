export const UserSessionTypes = {
  NOT_LOGGED_IN: 'NOT_LOGGED_IN',
  LOGGED_IN: 'LOGGED_IN',
};

const notLoggedIn = () => ({ type: UserSessionTypes.NOT_LOGGED_IN });
const loggedIn = (payload) => ({ type: UserSessionTypes.LOGGED_IN, payload });

export default {
  notLoggedIn,
  loggedIn,
};
