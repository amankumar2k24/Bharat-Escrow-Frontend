import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import roleReducer from "./slice/roleSlice";
import formReducer from "./slice/formSlice";

const store = configureStore({
    reducer: {
        role: roleReducer,
        form: formReducer,
    },
    middleware: [thunk], // Apply Redux Thunk middleware
});

export default store;
