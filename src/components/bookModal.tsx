'use client';

import {
  setSelectedBook,
  toggleModal,
} from '@/lib/redux/features/books/bookSlice';
import { useAppStore } from '@/lib/redux/hooks';
import { RootState } from '@/lib/redux/store';
import { useSelector } from 'react-redux';
import BookForm from './bookForm';

export default function BookModal() {
  const store = useAppStore();

  const openModal = useSelector((state: RootState) => state.books.openModal);

  if (openModal) {
    return (
      <>
        <div
          className='inset-0 fixed bg-black/60 z-10'
          onClick={() => {
            store.dispatch(toggleModal(!openModal));
          }}
        />
        <div className='fixed top-[15%] left-0 right-0 px-4 md:px-20 z-20 '>
          <BookForm />
        </div>
      </>
    );
  }
  return <></>;
}
