import { BackButton } from '@/components';
import Image from 'next/image';

export default async function BookPage({
  params,
}: {
  params: Promise<{ bookId: string }>;
}) {
  const bookId = (await params).bookId;
  const res = await fetch(`${process.env.BACKEND_URL}/api/books/${bookId}`);
  const data = (await res.json()) as Book[];
  const bookData = data[0];

  return (
    <main className="col-start-2 overflow-auto scrollbar-hide">
      <BackButton />
      <div className="grid grid-cols-[1.25fr_2fr] gap-15 px-20">
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
            By <span className="font-medium">{bookData.author.name}</span>
          </span>
          <p>{bookData.description}</p>
        </div>
      </div>
    </main>
  );
}
