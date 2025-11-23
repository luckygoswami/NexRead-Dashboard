import { BookCard } from './BookCard';

export async function BooksList() {
  const res = await fetch(`${process.env.BACKEND_URL}/api/books`);
  const BookData = (await res.json()) as Book[];

  return (
    <>
      <h2 className="text-3xl font-bold text-center mt-15 mb-5">All Books</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 justify-items-center gap-y-5">
        {BookData.map((book, idx) => (
          <BookCard
            key={`${idx}`}
            id={book._id}
            title={book.title}
            author={book.author.name}
            src={book.coverImage}
          />
        ))}
      </div>
    </>
  );
}
