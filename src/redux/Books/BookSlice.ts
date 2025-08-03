import type { IBook } from "@/type";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";


interface initialState {
    books: IBook[]
}

const initialState: initialState = {
    books: []
}
const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        addBook: (state, action: PayloadAction<IBook>) => {
            state.books.push(action.payload)
        },
        deleteBookLocally: (state, action: PayloadAction<string>) => {
            state.books = state.books.filter(book => book._id !== action.payload);
        }

    }

})

export const selectBooks = (state: RootState) => state.books.books;
export const { addBook, deleteBookLocally } = bookSlice.actions

export default bookSlice.reducer