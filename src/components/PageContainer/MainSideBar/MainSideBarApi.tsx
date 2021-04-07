import request from '../../../helpers/Api';
import { ApiFetch } from '../../../types/ApiTypes';
import { SidebarPayload } from './MainSideBarActions';

const SideBarApiFetch: ApiFetch<SidebarPayload> = {
  fetch: () => request<SidebarPayload>('sidebar/get-all', 'GET'),
};

export default SideBarApiFetch;
