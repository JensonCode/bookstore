import { Book } from '@/lib/data/books';
import {
  setSelectedBook,
  bookSlice,
} from '@/lib/redux/features/books/bookSlice';
import { useAppDispatch, useAppStore } from '@/lib/redux/hooks';
import { cn } from '@/utils/cn';

type CardProps = {
  book: Book;
};

export default function BookCard({ book }: CardProps) {
  const store = useAppStore();

  return (
    <div
      className={cn(
        'shadow-sm rounded-md border border-indigo-200 p-4 min-w-[240px] h-[300px] cursor-pointer',
        'transition-transform ease-in-out hover:-translate-x-[0.5px] hover:-translate-y-1 hover:shadow-md '
      )}
      onClick={() => store.dispatch(setSelectedBook(book.id))}
    >
      <span className='font-medium text-sm text-gray-600'>{book.category}</span>

      <div className='flex flex-col space-y-1'>
        <h1 className='font-bold text-2xl my-2 break-words'>{book.name}</h1>

        <span className='text-right py-2 font-medium text-[15px]'>
          <span className='text-gray-600 text-sm font-normal'>Price: </span>$
          {book.price}
        </span>

        <span className='text-sm text-gray-600'>Description:</span>
        <p className='line-clamp-5'>{book.description}</p>
      </div>
    </div>
  );
}
