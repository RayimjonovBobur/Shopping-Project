import {configureStore} from "@reduxjs/toolkit";
import stored_reducer from "./stored_reducer";

export const Store = configureStore({
    reducer: {
        users_reducer: stored_reducer
    }
})