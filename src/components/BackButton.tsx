'use client';

export function BackButton() {
  function handleBack() {
    window.history.back();
  }

  return (
    <button
      className="cursor-pointer my-5 text-gray-600 font-semibold"
      onClick={handleBack}>
      &lt; Back to Books
    </button>
  );
}
