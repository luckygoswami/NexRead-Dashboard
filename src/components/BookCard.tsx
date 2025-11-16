import Image from 'next/image';

export function BookCard({
  title,
  author,
  src,
}: {
  title: string;
  author: string;
  src: string;
}) {
  return (
    <div className="w-[200px] h-[350px] rounded-md border border-gray-100 flex flex-col justify-between hover:shadow-md hover:cursor-pointer">
      <div className="relative w-full h-[80%] rounded-lg overflow-hidden">
        <Image
          src={src}
          alt={`${title}`}
          fill
          className="object-fit"
          priority
        />
      </div>
      <span className="p-3">
        <h3 className="font-medium truncate">{title}</h3>
        <p className="text-sm text-gray-500">{author}</p>
      </span>
    </div>
  );
}
