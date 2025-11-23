import Image from 'next/image';

export function Banner() {
  return (
    <div className="bg-[#fafafb] rounded-md w-full md:py-10 md:px-35 py-5 px-3 text-center flex flex-col gap-5 items-center">
      <h1 className="text-4xl font-bold">Discover Your Next Great Read</h1>
      <p className="text-sm">
        Your gateway to a world of knowledge. Explore a vast collection of
        digital books across various genres. Dive into captivating stories,
        discover new authors, and expand your horizons with ease.
      </p>
      <Image
        src={
          'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
        alt="Banner"
        sizes="100vw"
        height={0}
        width={0}
        className="md:w-[400px] md:h-[200px] w-[90%] h-40 rounded-lg object-cover"
        priority
      />
    </div>
  );
}
