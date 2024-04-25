import { categoryList } from '@/lib/data/books';
import Link from 'next/link';
import React from 'react';
import Button from './ui/button';

//todo :
//add book

export default function Navbar() {
  return (
    <nav className='sticky top-0 w-full bg-indigo-900/90 h-[60px] flex items-center justify-between px-8 md:px-10 z-10'>
      <Link
        href='/'
        className='font-bold text-base md:text-xl text-white'
      >
        Blazes<span className='text-orange-500'>o</span>ft
        <span className='text-blue-500'>BookStore</span>
      </Link>

      <Button className='text-indigo-900 bg-white font-bold'>Add a book</Button>
    </nav>
  );
}
