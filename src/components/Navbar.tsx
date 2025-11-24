import Link from 'next/link';
import { SearchBar } from '@/components';

export function Navbar() {
  return (
    <div className="px-2 py-4 md:py-5 md:px-15 flex justify-between border-b border-blue-100">
      {/* Logo */}
      <Link
        href={'/'}
        className="text-blue-400 font-bold text-2xl">
        NexRead
      </Link>

      <SearchBar />
    </div>
  );
}
