import { BookCard } from './BookCard';

export async function BooksList({ title }: { title: string | undefined }) {
  const url = `${process.env.BACKEND_URL}/api/books${
    title ? `?title=${encodeURIComponent(title)}` : ''
  }`;
  const res = await fetch(url);
  const BookData = (await res.json()) as Book[];

  return (
    <>
      <h2 className="text-3xl font-bold text-center mt-15 mb-5">
        {title ? 'Searched' : 'All'} Books
      </h2>

      {!BookData.length ? (
        <div className="text-gray-400 font-bold text-lg italic text-center">
          No books available!
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 justify-items-center gap-y-5">
          {BookData.map((book, idx) => (
            <BookCard
              key={`${idx}`}
              id={book._id}
              title={book.title}
              author={book.author}
              src={book.coverImage}
            />
          ))}
        </div>
      )}
    </>
  );
}
