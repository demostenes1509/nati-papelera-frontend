export interface State<P> {
  loading: boolean;
  payload?: P | null;
  error?: string | null;
}
