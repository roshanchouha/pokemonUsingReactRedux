import { configureStore,combineReducers } from "@reduxjs/toolkit";
import  Pockemon  from "./Pockemons";
 
const rootReducer = combineReducers({
    pockemonList : Pockemon,
})

export default configureStore({reducer:rootReducer});