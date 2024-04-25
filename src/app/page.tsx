import BookList from '@/components/bookList';

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <main className='px-10 py-4'>
      <BookList />
    </main>
  );
}
