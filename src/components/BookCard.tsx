import Image from 'next/image';

export function BookCard() {
  return (
    <div className="w-[200px] h-[350px] rounded-md border border-gray-100 flex flex-col justify-between hover:shadow-md hover:cursor-pointer">
      <div className="relative w-full h-[80%] rounded-lg overflow-hidden">
        <Image
          src="https://m.media-amazon.com/images/I/814u4vr3tzL.jpg"
          alt="A book"
          fill
          className="object-fit"
          priority
        />
      </div>
      <span className="p-3">
        <h3 className="text-lg font-medium">Atomic Habits</h3>
        <p className="text-sm text-gray-500">James Clear</p>
      </span>
    </div>
  );
}
