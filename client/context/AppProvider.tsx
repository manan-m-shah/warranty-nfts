import React, { createContext, useReducer } from 'react'


//Initial State Interface
type State = {
  user: string | null,

}

//Initial State
const initialState: State = {
  user: null,
}

//Action Enums
export enum ActionKind {
  SET_USER = "SET_USER",
  UNSET_USER = "UNSET_USER",
}

// Action Interface
interface Action {
  type: ActionKind;
  payload: any;
}

function reducer(state: State, action: Action) {
  switch (action.type) {
    case ActionKind.SET_USER: {
      return {
        ...state,
        user: action.payload,
      }
    }
    case ActionKind.UNSET_USER: {
      return {
        ...state,
        user: null,
      }
    }

    default:
      return state;
  }
}

export const AppContext = createContext({} as any);
const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <AppContext.Provider value={{ state, dispatch } as { state: State }}>{children}</AppContext.Provider>
}

export default AppProvider;