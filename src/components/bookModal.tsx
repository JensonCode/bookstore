'use client';

import { setSelectedBook } from '@/lib/redux/features/books/bookSlice';
import { useAppStore } from '@/lib/redux/hooks';
import { RootState } from '@/lib/redux/store';
import { useSelector } from 'react-redux';
import BookForm from './bookForm';

export default function BookModal() {
  const store = useAppStore();

  const book = useSelector((state: RootState) => state.books.selectedBook);
  if (book) {
    return (
      <div
        className='inset-0 fixed bg-black/30 '
        onClick={() => store.dispatch(setSelectedBook(undefined))}
      >
        <div className='relative mt-[100px] px-4'>
          <BookForm book={book} />
        </div>
      </div>
    );
  }
  return <></>;
}
