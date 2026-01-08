import Link from 'next/link';
import { SearchBar } from '@/components';
import Image from 'next/image';
import { Suspense } from 'react';

export function Navbar() {
  return (
    <div className="px-2 py-4 md:py-5 md:px-15 flex justify-between border-b border-blue-100">
      {/* Logo */}
      <Link
        href={'/'}
        className="text-blue-500 font-bold text-2xl flex items-center">
        <Image
          src={'/nexread_logo.png'}
          alt="NexRead_logo"
          width={40}
          height={40}
          priority
          className="rounded-md"
        />
        NexRead
      </Link>

      <Suspense fallback={null}>
        <SearchBar />
      </Suspense>
    </div>
  );
}
