import { Search } from 'lucide-react';
import Link from 'next/link';

export function Navbar() {
  return (
    <div className="px-2 py-4 md:py-5 md:px-15 flex justify-between border-b border-blue-100">
      {/* Logo */}
      <Link
        href={'/'}
        className="text-blue-400 font-bold text-2xl">
        NexRead
      </Link>

      {/* Search */}
      <div className="relative md:w-100 flex items-center">
        <input
          type="text"
          placeholder="Search books"
          className="border border-gray-300 rounded-full w-full pl-5 pr-11 py-2 text-sm"
        />
        <button className="rounded-full bg-blue-500 text-white p-1.5 absolute right-2 cursor-pointer">
          <Search size={17} />
        </button>
      </div>
    </div>
  );
}
