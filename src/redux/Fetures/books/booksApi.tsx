/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { IBooks } from '../../../types/globalTypes';
import { api } from '../../api/apiSlice';

const booksApi = api.injectEndpoints({
  endpoints: builder => ({
    getBooks: builder.query({
      query: () => '/books',
    }),
    createBook: builder.mutation({
      query: data => ({
        url: '/book',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});
export const { getBooks, createBook } = booksApi.endpoints;
export const { useGetBooksQuery, useCreateBookMutation } = booksApi;
