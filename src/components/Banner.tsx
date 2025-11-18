import Image from 'next/image';

export function Banner() {
  return (
    <div className="bg-[#fafafb] rounded-md w-full py-10 px-35 text-center flex flex-col gap-5 items-center">
      <h1 className="text-4xl font-bold">Discover Your Next Great Read</h1>
      <p className="text-sm">
        Your gateway to a world of knowledge. Explore a vast collection of
        digital books across various genres. Dive into captivating stories,
        discover new authors, and expand your horizons with ease.
      </p>
      <Image
        src={'/assets/book-reading.jpg'}
        alt="Banner"
        sizes="100vw"
        height={0}
        width={0}
        className="w-[400px] h-[200px] rounded-lg object-cover"
        priority
      />
    </div>
  );
}
