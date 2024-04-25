'use client';

import { Book } from '@/lib/data/books';
import { bookFormData, bookFormSchema } from '@/lib/schema/bookForm';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';

type FormProps = {
  book: Book | undefined;
};

export default function BookForm({ book }: FormProps) {
  const mutationType = book ? 'change' : 'add';

  const form = useForm<bookFormData>({
    resolver: zodResolver(bookFormSchema),
    defaultValues: book,
  });

  function onBookFormSubmit(formData: bookFormData) {}

  return (
    <form
      id={'book-form-' + mutationType}
      onSubmit={form.handleSubmit(onBookFormSubmit)}
      className='bg-white h-[400px] rounded-md p-4'
    >
      <h2>{mutationType}</h2>
      bookForm
    </form>
  );
}
