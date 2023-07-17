/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { IBooks } from '../../../types/globalTypes';
import { api } from '../../api/apiSlice';

const booksApi = api.injectEndpoints({
  endpoints: builder => ({
    getBooks: builder.query({
      query: () => '/books',
    }),
    getBooksLimit: builder.query({
      query: () => '/books/limit',
    }),
    singleBook: builder.query({
      query: id => `/book/${id}`,
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
export const {
  useGetBooksQuery,
  useCreateBookMutation,
  useSingleBookQuery,
  useGetBooksLimitQuery,
} = booksApi;
