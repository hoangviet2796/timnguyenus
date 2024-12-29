import Link from "next/link";

export default function BackToTopButton() {
  return (
    <div className="flex justify-center mt-12">
      <Link
        href="/topic"
        className="bg-blue-500 text-white rounded-full px-4 py-2 shadow-lg hover:bg-blue-600 transition duration-300 hover:underline"
        aria-label="Quay lại"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6 inline-block mr-2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
        Xem Tất Cả Bài Viết
      </Link>
    </div>
  );
}