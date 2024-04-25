'use server';

import { Book } from '@/lib/data/books';
import { bookFormData } from '@/lib/schema/bookForm';
import { promises as fs } from 'fs';

const filePath = process.cwd() + '/src/data.json';

export const getBookList = async (): Promise<Book[]> => {
  const file = await fs.readFile(filePath, 'utf-8');
  const data = JSON.parse(file);

  return data.data;
};

export const deleteBook = async (id: number) => {
  const file = await fs.readFile(filePath, 'utf-8');

  const data = JSON.parse(file);

  const list: Book[] = data.data;

  const newList = list.filter((book) => book.id !== id);

  const content = JSON.stringify({ data: newList });

  await fs.writeFile(filePath, content);
};

export const addBook = async (formData: bookFormData) => {
  const file = await fs.readFile(filePath, 'utf-8');

  const data = JSON.parse(file);

  const list: Book[] = data.data;

  const newBook = { id: list.length + 2, ...formData };

  list.push(newBook);

  const content = JSON.stringify({ data: list });

  await fs.writeFile(filePath, content);
};

export const editBook = async (target: Book) => {
  const file = await fs.readFile(filePath, 'utf-8');

  const data = JSON.parse(file);

  const list: Book[] = data.data;

  const idx = list.findIndex((book) => book.id === target.id);

  list[idx] = target;

  const content = JSON.stringify({ data: list });

  await fs.writeFile(filePath, content);
};
