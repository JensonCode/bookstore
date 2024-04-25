import { Book } from '@/lib/data/books';
import { bookFormData } from '@/lib/schema/bookForm';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface BookState {
  books: Book[];
  selectedBook: Book | undefined;
  openModal: boolean;
}

const initialState: BookState = {
  books: [],
  selectedBook: undefined,
  openModal: false,
};

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    // init the book list
    initializeBookSlice: (state, action: PayloadAction<Book[]>) => {
      state.books = [...action.payload];
      state.selectedBook = undefined;
      state.openModal = false;
    },
    // set selected book for book form
    // if found, form would have the default value
    // if not, form serves as add book form
    setSelectedBook: (state, action: PayloadAction<number | undefined>) => {
      if (action.payload && action.payload > 0) {
        const idx = state.books.findIndex((book) => book.id === action.payload);
        state.selectedBook = state.books[idx];
      } else {
        state.selectedBook = undefined;
      }
      state.openModal = true;
    },
    // add a book to the book list
    add: (state, action: PayloadAction<bookFormData>) => {
      const newBook = { id: state.books.length + 1, ...action.payload };
      state.books.push(newBook);

      state.openModal = false;
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

      state.openModal = false;
    },
    //toggle the modal
    toggleModal: (state, action: PayloadAction<boolean>) => {
      state.openModal = action.payload;
    },
  },
});

export const {
  initializeBookSlice,
  setSelectedBook,
  add,
  remove,
  update,
  toggleModal,
} = bookSlice.actions;

export default bookSlice.reducer;
