'use client';
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from '@/lib/redux/store';

import { Book } from '@/lib/data/books';
import { initializeBookSlice } from '@/lib/redux/features/books/bookSlice';

export default function StoreProvider({
  books,
  children,
}: {
  books: Book[];
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();

  if (!storeRef.current) {
    //create a new store instance
    storeRef.current = makeStore();
    //data fetched list from root layout, and init book slice state here
    storeRef.current.dispatch(initializeBookSlice(books));
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
