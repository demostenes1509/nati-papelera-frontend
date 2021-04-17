import { combineReducers } from 'redux';
import AuthenticationReducer from '../components/Containers/Authentication/AuthenticationReducer';
import SessionReducer from '../components/Containers/Authentication/SessionReducer';
import SideBarReducer from '../components/Containers/SideBar/SideBarReducer';

const rootReducers = combineReducers({
  sidebarReducer: SideBarReducer,
  authenticationReducer: AuthenticationReducer,
  sessionReducer: SessionReducer,
});

export default rootReducers;
