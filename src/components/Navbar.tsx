import { Search } from 'lucide-react';
import Link from 'next/link';

export function Navbar() {
  return (
    <div className="py-5 px-15 flex justify-between border border-blue-100">
      {/* Logo */}
      <Link
        href={'/'}
        className="text-blue-400 font-bold text-2xl">
        NexRead
      </Link>

      {/* Search */}
      <div className="relative w-[300px] flex items-center">
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
