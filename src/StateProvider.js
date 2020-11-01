//setup data layer
// we need this to track the basket
import { createContext, useReducer, useContext } from 'react';


export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)} >
        {children}
    </StateContext.Provider>

);

//this is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);