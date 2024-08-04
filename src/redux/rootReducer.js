import { combineReducers } from "@reduxjs/toolkit";
import reducerSlice from "./reducerSlice";

const rootReducers = combineReducers({
    cart: reducerSlice,
})

export default rootReducers;