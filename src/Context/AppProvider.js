import { createContext,useContext, useReducer } from "react"

 export const DispatchContext=createContext()
 export const StateContext=createContext()
const AppProvider=({children}) =>{

    const initialState={
        cartItems:[],
    }

const reducer=(state,action)=>{
    switch(action.typr) {
        case "add_to_cart":
             return {...state.cartItems,cartItems:[...state.cartItems,action.payload],

                    }
        default:{
            return state
        }
    }
}
let [state,dispatch]=useReducer(reducer, initialState)

    return(
       <DispatchContext.Provider value={dispatch}>
        <StateContext.Provider value={state}>
           {children}   
        </StateContext.Provider>
       </DispatchContext.Provider>

    )
}

export default AppProvider