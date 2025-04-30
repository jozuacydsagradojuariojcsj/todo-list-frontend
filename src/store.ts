import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userApi } from "./services/userApi";
import { postApi } from "./services/postApi";
import userSlice from "./services/userSlice";
import { messageApi } from "./services/messageApi";

export const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
        [postApi.reducerPath]: postApi.reducer,
        [messageApi.reducerPath]: messageApi.reducer, 
        user: userSlice,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(userApi.middleware, postApi.middleware),
});


setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;