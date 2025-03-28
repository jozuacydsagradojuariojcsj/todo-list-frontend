import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setUserData } from "./userSlice";
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/",
    credentials:"include",
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        body: credentials,
      }),
      async onQueryStarted(credentials, {dispatch,queryFulfilled}) {
        try {
          const { data } = await queryFulfilled;
          console.log("RawData",data);
          console.log("Data", data.user )
          // Dispatch an action to update global state with the user data
          dispatch(setUserData(data.user));
        } catch (error) {
          console.error("Login failed:", error);
        }
      }
    }),
  }),
});

export const { useLoginUserMutation } = userApi;
