import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl:"http://localhost:3000/api/"
    }),
    endpoints: (builder) => ({
        loginUser: builder.mutation({
            query: (credentials) => ({
                url: "auth/login",
                method: "POST",
                body: credentials,
            })
        }),
    }),
});

export const { useLoginUserMutation } = userApi