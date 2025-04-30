import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetMessage } from "../types/messageType"; 

export const messageApi = createApi({
    reducerPath: "messageApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000/api/message/",
    }),
    endpoints:(builder) => ({
        getMessage: builder.query<GetMessage[],void>({ query: () => "getmessage" }),
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