'use client';

import BookCard from './bookCard';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/redux/store';

// book list is fetched from server and hydrated to this client component by redux
// book list in home page
export default function BookList() {
  const books = useSelector((state: RootState) => state.books.books);
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
      {books.map((book, index) => (
        <BookCard
          book={book}
          key={'book' + index}
        />
      ))}
    </div>
  );
}
