export interface State<P> {
  loading: boolean;
  payload: P;
  error: string | null;
}
