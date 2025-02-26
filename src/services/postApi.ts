import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";


export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({
        baseUrl:"http://localhost:3000/api/"
    }),
    endpoints: (builder) => ({
        getPosts: builder.query({query: () => ""})
    })
})