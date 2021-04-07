import ReducersUtil from '../../../helpers/ReducersUtil';
import { Action } from '../../../types/ActionsTypes';
import { State } from '../../../types/StateTypes';
import { SidebarPayload, SidebarTypes } from './MainSideBarActions';

const initialState: State<SidebarPayload> = {
  loading: false,
  payload: { categories: [] },
  error: null,
};

export default (state = initialState, action: Action<SidebarPayload>): State<SidebarPayload> => {
  return ReducersUtil.defaultFetch(initialState, state, action, SidebarTypes);
};
