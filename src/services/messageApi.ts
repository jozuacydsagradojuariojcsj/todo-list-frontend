import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetMessage } from "../types/messageType"; 

export const messageApi = createApi({
    reducerPath: "messageApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000/api/message/",
        credentials:"include",
    }),
    endpoints:(builder) => ({
        getMessage: builder.query<{message:GetMessage[]},void>({ query: (receiver_id) => `getmessage/${receiver_id}` }),
        createMessage: builder.mutation({
            query: ({post, chatRoomId}:{post:object; chatRoomId?:string}) => ({
                url: chatRoomId ? `send/${chatRoomId}` : 'send',
                method: "POST",
                body: post,
            }),
        }),
    }),
});

export const { useGetMessageQuery, useCreateMessageMutation } = messageApi;