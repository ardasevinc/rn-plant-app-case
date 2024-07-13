import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummy-api-jtg6bessta-ey.a.run.app',
  }),
  endpoints: (builder) => ({
    getQuestions: builder.query({
      query: () => '/getQuestions',
    }),
    getCategories: builder.query({
      query: () => '/getCategories',
    }),
  }),
});

export const { useGetQuestionsQuery, useGetCategoriesQuery } = apiSlice;
