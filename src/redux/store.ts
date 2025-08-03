import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/counterSlice/counterSlice'
import bookReducer from '../redux/Books/BookSlice'
import { booksApi } from './Api/baseApi'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        books: bookReducer,
        [booksApi.reducerPath]: booksApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(booksApi.middleware),
})



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch