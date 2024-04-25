'use client';

import { Book } from '@/lib/data/books';
import {
  bookFormInputs,
  bookFormData,
  bookFormSchema,
} from '@/lib/schema/bookForm';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { InputLabel } from './ui/inputLabel';
import { cn } from '@/utils/cn';
import Button from './ui/button';
import { useAppStore } from '@/lib/redux/hooks';
import { add, update } from '@/lib/redux/features/books/bookSlice';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/redux/store';
import { addBook, editBook } from '@/server/book';

export default function BookForm() {
  const store = useAppStore();

  const book = useSelector((state: RootState) => state.books.selectedBook);

  const mutationType = book?.id ? 'Modifying' : 'Adding new book';

  const form = useForm<bookFormData>({
    resolver: zodResolver(bookFormSchema),
    defaultValues: book ? book : undefined,
  });

  function onBookFormSubmit(formData: bookFormData) {
    if (book?.id) {
      const updateBook: Book = { id: book.id, ...formData };

      // i could update book from database /server
      // usually i use react query for client components
      editBook(updateBook);
      // if update success, i update the book from state
      store.dispatch(update(updateBook));
    } else {
      // i could add book to database /server
      // usually i use react query for client components
      addBook(formData);
      // if add success, i add the book to state
      store.dispatch(add(formData));
    }
  }

  return (
    <form
      id={'book-form-' + mutationType}
      onSubmit={form.handleSubmit(onBookFormSubmit)}
      className='bg-white rounded-md p-4 flex flex-col space-y-4'
    >
      <h1 className='font-bold text-lg border-b border-gray-300 pb-2'>
        {book ? mutationType + ' book ' + book.name : mutationType}
      </h1>

      <fieldset className='flex flex-col spacey-y-2 md:space-y-4 border-b border-gray-300 pb-4 mb-2 max-md:text-sm'>
        {bookFormInputs.map((input, index) => (
          <div
            className='flex flex-col'
            key={'book-form-input-' + index}
          >
            <InputLabel htmlFor={'book-form-input-' + index}>
              {input.label}
            </InputLabel>
            <input
              id={'book-form-input-' + index}
              type={input.type}
              {...form.register(input.name)}
              className={cn(
                ' focus:border-2 focus:border-orange-500 ',
                'border-gray-500 border-2 rounded-[5px] p-2'
              )}
              step={'.01'}
            />
            {!!form.formState.errors[input.name] && (
              <span className='text-sm text-red-500'>
                {form.formState.errors[input.name]?.message}
              </span>
            )}
          </div>
        ))}
      </fieldset>

      <fieldset className='flex flex-col space-y-2 md:space-y-4 border-b border-gray-300 pb-4 mb-4 max-md:text-sm'>
        <InputLabel htmlFor='book-form-textarea'>Book Description</InputLabel>
        <textarea
          id='book-form-textarea'
          cols={10}
          {...form.register('description')}
          className={cn(
            'min-h-[100px]',
            ' focus:border-2 focus:border-orange-500 ',
            'border-gray-500 border-2 rounded-[5px] p-2'
          )}
        ></textarea>
        {!!form.formState.errors.description && (
          <span className='text-sm text-red-500'>
            {form.formState.errors.description?.message}
          </span>
        )}
      </fieldset>

      <div className='flex justify-end'>
        <Button
          type='submit'
          form={'book-form-' + mutationType}
          className='bg-yellow-400'
        >
          {book?.id ? 'Confirm Chagne' : 'Add New Book'}
        </Button>
      </div>
    </form>
  );
}
