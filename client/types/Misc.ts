import { ActionKind } from '../context/AppProvider';

export type DispatchType = {
  type: ActionKind;
  payload?: any;
};