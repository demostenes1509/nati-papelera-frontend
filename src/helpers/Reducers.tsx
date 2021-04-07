import { combineReducers } from 'redux';
import MainSideBarReducer from '../components/PageContainer/MainSideBar/MainSideBarReducer';

const rootReducers = combineReducers({
  mainSideBar: MainSideBarReducer,
});

export default rootReducers;
