import { AxiosResponse } from 'axios';

export interface ApiFetch<R> {
  fetch: (params?: string) => Promise<AxiosResponse<R>>;
}
