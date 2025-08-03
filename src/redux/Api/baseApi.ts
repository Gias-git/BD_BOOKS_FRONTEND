import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksApi = createApi({
    reducerPath: 'booksApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://bd-books-backend-new-assign.vercel.app' }),
    tagTypes: ["Books"],
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: ({page = 1}) => `/books?page=${page}`,
            providesTags: ["Books"],
        }),
        createBook: builder.mutation({
            query(body) {
                return {
                    url: `books`,
                    method: 'post',
                    body
                }
            },
            invalidatesTags: ["Books"]
        }),

        updateBook: builder.mutation({
            query(data) {
                const { id, ...body } = data

                console.log(id, "id")
                return {
                    url: `books/${id}`,
                    method: 'PUT',
                    body,
                }
            },
            invalidatesTags: ["Books"]
        }),

        deleteBook: builder.mutation({
            query(id) {
                return {
                    url: `books/${id}`,
                    method: 'DELETE',
                }
            },
            // Invalidates all queries that subscribe to this Post `id` only.
            invalidatesTags: ["Books"]
        }),

        borrowBook: builder.mutation({
            query(body) {
                return {
                    url: `borrow`,
                    method: 'post',
                    body
                }
            },
            invalidatesTags: ["Books"]
        }),
        getBorrowBook: builder.query({
            query: () => `/borrow`,
            providesTags: ["Books"],
        }),

        getBookById: builder.query({
            query: (id) => ({ url: `books/${id}` }),
            providesTags: ["Books"],
        })

    }),
})

export const { useGetBooksQuery, useCreateBookMutation, useUpdateBookMutation, useDeleteBookMutation, useBorrowBookMutation, useGetBorrowBookQuery, useGetBookByIdQuery } = booksApi