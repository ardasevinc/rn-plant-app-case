import { CategoriesApiResponse } from '@/types/category.type';
import { QuestionsApiResponse } from '@/types/question.type';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummy-api-jtg6bessta-ey.a.run.app',
  }),
  endpoints: (builder) => ({
    getQuestions: builder.query<QuestionsApiResponse, undefined>({
      query: () => '/getQuestions',
    }),
    getCategories: builder.query<CategoriesApiResponse, undefined>({
      query: () => '/getCategories',
    }),
  }),
});

export const { useGetQuestionsQuery, useGetCategoriesQuery } = api;
