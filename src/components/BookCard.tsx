'use client';
import Image from 'next/image';
import Link from 'next/link';

export function BookCard({
  id,
  title,
  author,
  src,
}: {
  id: string;
  title: string;
  author: string;
  src: string;
}) {
  return (
    <Link href={`books/${id}`}>
      <div className="w-[200px] h-[350px] rounded-md border border-gray-200 flex flex-col justify-between hover:shadow-lg hover:cursor-pointer">
        <Image
          src={src}
          alt={`${title}`}
          height={0}
          width={0}
          sizes="100vw"
          className="w-full h-[80%] rounded-lg object-fit"
          priority
        />
        <span className="p-3">
          <h3 className="font-medium truncate">{title}</h3>
          <p className="text-sm text-gray-500">{author}</p>
        </span>
      </div>
    </Link>
  );
}
