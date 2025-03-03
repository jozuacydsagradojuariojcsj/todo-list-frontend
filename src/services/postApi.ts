import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Posts } from "../types/postType";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<Posts[],void>({ query: () => "posts/get" }),
    createPost: builder.mutation({
      query: (post) => ({
        url: "posts/create",
        method: "POST",
        body: post,
      }),
    }),
  }),
});

export const { useGetPostsQuery, useCreatePostMutation } = postApi;
