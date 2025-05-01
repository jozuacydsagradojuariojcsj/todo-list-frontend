import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetMessage } from "../types/messageType"; 

export const messageApi = createApi({
    reducerPath: "messageApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000/api/message/",
    }),
    endpoints:(builder) => ({
        getMessage: builder.query<GetMessage[],{receiver_id:string}>({ query: (receiver_id) => `getmessage/${receiver_id}` }),
        createMessage: builder.mutation({
            query: (post) => ({
                url: "/send",
                method: "POST",
                body: post,
            }),
        }),
    }),
});

export const { useGetMessageQuery, useCreateMessageMutation } = messageApi;