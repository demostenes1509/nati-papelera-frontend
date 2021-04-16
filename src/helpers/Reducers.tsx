import { combineReducers } from 'redux';
import FacebookReducer from '../components/Containers/Authentication/FacebookReducer';
import SideBarReducer from '../components/Containers/SideBar/SideBarReducer';

const rootReducers = combineReducers({
  sidebarReducer: SideBarReducer,
  facebookReducer: FacebookReducer,
});

export default rootReducers;
