import { Action } from './ActionsTypes';
import { State } from './StateTypes';

export interface FetchComponent<P> extends State<P> {
  fetch: () => Action<P>;
}
