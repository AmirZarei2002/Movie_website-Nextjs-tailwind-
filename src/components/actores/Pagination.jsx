import Link from 'next/link';

export default function Pagination({ currentPage, totalPages }) {
    return (
        <div className="mt-8 py-5 overflow-x-scroll">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Link key={page} href={`?page=${page}`}>
                    <a
                        className={`bg-cream dark:bg-[#2dcddf] rounded-md mb-4 px-2 ${
                            page === currentPage
                                ? 'font-bold text-[#3c79f5] dark:text-blue-600'
                                : 'font-semibold text-sky-600 dark:text-slate-700'
                        } mx-2`}
                    >
                        {page}
                    </a>
                </Link>
            ))}
        </div>
    );
}
