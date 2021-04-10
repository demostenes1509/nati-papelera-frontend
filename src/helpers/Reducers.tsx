import { combineReducers } from 'redux';
import MainSideBarReducer from '../components/PageContainer/SideBar/SideBarReducer';

const rootReducers = combineReducers({
  mainSideBar: MainSideBarReducer,
});

export default rootReducers;
