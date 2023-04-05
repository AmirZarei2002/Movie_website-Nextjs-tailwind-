import Image from 'next/image';
import Link from 'next/link';

import { server } from '../config';

import { TitleText } from '../components/CustomTexts';

// motion
import { motion } from 'framer-motion';
import { fadeIn } from '../utils';

export default function Home({ people, totalPages, currentPage }) {
    return (
        <main className="container mx-auto my-10 space-y-12">
            <TitleText title="Popular Actores" textStyles="text-center mt-4" />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {people.map((person) => (
                    <motion.div
                        variants={fadeIn('right', 'Inertia', 0.2, 1)}
                        initial="hidden"
                        whileInView="show"
                        key={person.id}
                        className="bg-white dark:bg-[#273d3f] rounded-lg shadow-md overflow-hidden"
                    >
                        <div className="relative pb-2/3">
                            <Image
                                src={`https://image.tmdb.org/t/p/w400${person.profile_path}`}
                                width={300}
                                height={300}
                                alt={person.name}
                                className="object-center object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                                {person.name}
                            </h2>
                            <ul className="text-sm mt-2 text-gray-500 dark:text-white/70">
                                {person.known_for.map((work) => (
                                    <li
                                        key={work.id}
                                        className="truncate"
                                        title={work.original_title}
                                    >
                                        {work.original_title &&
                                        work.original_title.length > 20
                                            ? `${work.original_title.slice(
                                                  0,
                                                  20
                                              )}...`
                                            : work.original_title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
            <div className="mt-8 py-5 overflow-x-scroll">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
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
                    )
                )}
            </div>
        </main>
    );
}

export async function getServerSideProps({ query }) {
  const { page = 1 } = query;
  const apiKey = process.env.API_KEY;
  const language = 'en-US';
  const maxPages = 100;

  const res = await fetch(
      `${server}/person/popular?api_key=${apiKey}&language=${language}&page=${page}`
  );
  const data = await res.json();

  const totalPages = Math.min(data.total_pages, maxPages);

  return {
      props: {
          people: data.results,
          totalPages,
          currentPage: parseInt(page, 10),
      },
  };
}