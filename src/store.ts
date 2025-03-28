import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userApi } from "./services/userApi";
import { postApi } from "./services/postApi";
import userSlice from "./services/userSlice";

export const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
        [postApi.reducerPath]: postApi.reducer,
        user: userSlice,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(userApi.middleware, postApi.middleware),
});


setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;