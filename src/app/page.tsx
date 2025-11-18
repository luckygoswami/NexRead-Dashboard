import { Banner, BooksList } from '@/components';
import { Suspense } from 'react';

export default async function Home() {
  return (
    <main className="col-start-2 overflow-auto scrollbar-hide py-5">
      {/* Banner Section */}
      <Banner />

      {/* Books list */}
      <Suspense fallback={<div>Loading...</div>}>
        <BooksList />
      </Suspense>
    </main>
  );
}
