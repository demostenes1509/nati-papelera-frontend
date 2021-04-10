import { combineReducers } from 'redux';
import SideBarReducer from '../components/Containers/SideBar/SideBarReducer';

const rootReducers = combineReducers({
  sidebarReducer: SideBarReducer,
});

export default rootReducers;
