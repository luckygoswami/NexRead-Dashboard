import { BackButton } from '@/components';
import Image from 'next/image';

const bookCache = new Map<string, Promise<Book | null>>();
async function fetchBook(bookId: string) {
  if (bookCache.has(bookId)) return bookCache.get(bookId)!;

  const p = (async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/books/${bookId}`
      );
      if (!res.ok) return null;
      const data = (await res.json()) as Book[];
      return data[0] ?? null;
    } catch {
      return null;
    }
  })();

  bookCache.set(bookId, p);
  return p;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ bookId: string }>;
}) {
  const bookId = (await params).bookId;
  const bookData = (await fetchBook(bookId)) as Book;
  return {
    title: bookData ? `${bookData.title} | NexRead` : 'NexRead | Book',
  };
}

export default async function BookPage({
  params,
}: {
  params: Promise<{ bookId: string }>;
}) {
  const bookId = (await params).bookId;
  const bookData = (await fetchBook(bookId)) as Book;

  if (!bookData) {
    return (
      <main className="col-start-2 overflow-auto scrollbar-hide p-2">
        <BackButton />
        <div className="text-gray-400 font-bold text-lg italic text-center">
          Book not found.
        </div>
      </main>
    );
  }

  return (
    <main className="col-start-2 overflow-auto scrollbar-hide p-2">
      <BackButton />
      <div className="flex flex-col items-center text-center gap-10 md:text-left md:grid md:grid-cols-[1.25fr_2fr] md:gap-15 md:px-10">
        {/* Book cover */}
        <div className="w-[250px]">
          <Image
            src={bookData.coverImage}
            alt={`${bookData.title}`}
            height={0}
            width={0}
            sizes="100vw"
            className="w-full h-90 rounded-xl object-fit"
            priority
          />
          <button className="rounded-md py-2 px-3 mt-3 w-full bg-blue-500 hover:bg-blue-600 text-white cursor-pointer">
            <a
              href={bookData.file}
              target="_blank">
              Read Book
            </a>
          </button>
        </div>
        {/* Book Description */}
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-2xl capitalize">{bookData.title}</h1>
          <span className="text-gray-500">
            <span className="font-medium">{bookData.author}</span>
          </span>
          <p>{bookData.description}</p>
        </div>
      </div>
    </main>
  );
}
