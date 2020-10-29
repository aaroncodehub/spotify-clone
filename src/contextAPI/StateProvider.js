import React, { createContext, useContext, useReducer } from "react";

// data layer

export const StateContext = createContext();

//build a provider , it returns a StateContext provider and all the passed-in parameters will be passed down to provider's value.
// which means useReducer will be passed to StateContext with a reducer and initialState.in other words, 
// the children components will get state and dispatch by calling useContext(StateContext).
// const [state, dispatch] = useContext(StateContext), and useContext(StateContext) is equal to useReducer(reducer,initialState) 
// as it is the value passed in to provider. so childern component can use its state and dispatch action object like {type:'ADD',payload: id}
// all it does is to pass useRedcucer to ContexAPI

export const StateProvider = ({ initialState, reducer, children }) => {
 return <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>;
};

// this is how we use it inside of component

export const useStateValue = () => useContext(StateContext);