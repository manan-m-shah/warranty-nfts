import Router from 'next/router';
import React, { createContext, useEffect, useReducer } from 'react'
import { Item, User, Warranty } from '../types/Contract';
import { getCurrentCustomer, getCurrentMerchant, getMyItems, getMyWarranties, getSoldWarranties } from '../utils/user';


//Initial State Interface
type State = {
  user: string | null,
  merchant: User,
  customer: User,
  items: Item[],
  merchant_warranties: Warranty[],
  customer_warranties: Warranty[],
}

//Initial State
const initialState: State = {
  user: null,
  merchant: {} as User,
  customer: {} as User,
  items: [] as Item[],
  merchant_warranties: [] as Warranty[],
  customer_warranties: [] as Warranty[],
}

//Action Enums
export enum ActionKind {
  SET_USER = "SET_USER",
  UNSET_USER = "UNSET_USER",
  SET_MERCHANT = "SET_MERCHANT",
  SET_CUSTOMER = "SET_CUSTOMER",
  SET_ITEMS = "SET_ITEMS",
  SET_MERCHANT_WARRANTIES = "SET_MERCHANT_WARRANTIES",
  SET_CUSTOMER_WARRANTIES = "SET_CUSTOMER_WARRANTIES",
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

    case ActionKind.SET_MERCHANT: {
      return {
        ...state,
        merchant: action.payload,
      }
    }

    case ActionKind.SET_CUSTOMER: {
      return {
        ...state,
        customer: action.payload,
      }
    }

    case ActionKind.SET_ITEMS: {
      return {
        ...state,
        items: action.payload,
      }
    }
      
    case ActionKind.SET_MERCHANT_WARRANTIES: {
      return {
        ...state,
        merchant_warranties: action.payload,
      }
    }
      
    case ActionKind.SET_CUSTOMER_WARRANTIES: {
      return {
        ...state,
        customer_warranties: action.payload,
      }
    }

    default:
      return state;
  }
}

export const AppContext = createContext({} as any);
const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // @ts-ignore
    window.ethereum.on("accountsChanged", function (accounts: String) {
      dispatch({ type: ActionKind.SET_USER, payload: accounts[0] });
    });
  }, []);

  useEffect(() => {
    if (!state.user) {
      return
    }
    const setMerchant = async () => {
      const currentMerchant = await getCurrentMerchant(state.user);
      dispatch({ type: ActionKind.SET_MERCHANT, payload: currentMerchant });
    }

    const setCustomer = async () => {
      const currentCustomer = await getCurrentCustomer(state.user);
      dispatch({ type: ActionKind.SET_CUSTOMER, payload: currentCustomer });
    }

    setMerchant();
    setCustomer();
  }, [state.user]);

  useEffect(() => {
    const setMerchantWarranties = async () => {
      const myItems = await getMyItems();
      dispatch({ type: ActionKind.SET_ITEMS, payload: myItems });
      const myWarranties = await getSoldWarranties();
      dispatch({ type: ActionKind.SET_MERCHANT_WARRANTIES, payload: myWarranties });
    }
    if (state.merchant.name) {
      setMerchantWarranties();
    }
  }, [state.merchant]);

  useEffect(() => {
    const setCustomerWarranties = async () => {
      const myWarranties = await getMyWarranties();
      dispatch({ type: ActionKind.SET_CUSTOMER_WARRANTIES, payload: myWarranties });
    }
    if (state.customer.name) {
      setCustomerWarranties();
    }
  }, [state.customer]);

  return <AppContext.Provider value={{ state, dispatch } as { state: State }}>{children}</AppContext.Provider>
}

export default AppProvider;