'use client';

import { Search } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useRef, useState } from 'react';

export function SearchBar() {
  const searchParams = useSearchParams();
  const title = searchParams.get('title') || '';
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [query, setQuery] = useState(title);
  const router = useRouter();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  function detectEnter(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key == 'Enter') {
      inputRef.current?.blur();
      handleSearch();
    }
  }

  function handleSearch() {
    router.push(`/?title=${encodeURIComponent(query)}`);
  }

  return (
    <div className="relative md:w-100 flex items-center">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search books"
        value={query}
        onChange={handleChange}
        onKeyDown={detectEnter}
        className="border border-gray-300 rounded-full w-full pl-5 pr-11 py-2 text-sm"
      />
      <button
        onClick={handleSearch}
        className="rounded-full bg-blue-500 text-white p-1.5 absolute right-2 cursor-pointer">
        <Search size={17} />
      </button>
    </div>
  );
}
