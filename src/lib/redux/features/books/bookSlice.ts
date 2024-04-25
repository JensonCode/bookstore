import { Book } from '@/lib/data/books';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface BookState {
  books: Book[];
  selectedBook: Book | undefined;
}

const initialState: BookState = {
  books: [],
  selectedBook: undefined,
};

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    // init the book list
    initializeBookSlice: (state, action: PayloadAction<Book[]>) => {
      state.books = [...action.payload];
      state.selectedBook = undefined;
    },
    setSelectedBook: (state, action: PayloadAction<number | undefined>) => {
      const idx = state.books.findIndex((book) => book.id === action.payload);
      state.selectedBook = state.books[idx];
    },
    // add a book to the book list
    add: (state, action: PayloadAction<Book>) => {
      state.books.push(action.payload);
    },
    // remove a book from the book list by its id
    remove: (state, action: PayloadAction<number>) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
    // update a specific book by the given id
    update: (state, action: PayloadAction<Book>) => {
      const idx = state.books.findIndex(
        (book) => book.id === action.payload.id
      );
      state.books[idx] = action.payload;
    },
  },
});

export const { initializeBookSlice, setSelectedBook, add, remove, update } =
  bookSlice.actions;

export default bookSlice.reducer;
