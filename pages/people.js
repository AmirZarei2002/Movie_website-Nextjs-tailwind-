import Image from 'next/image';
import { server } from '../config';
import { TitleText } from '../components/CustomTexts';
import Link from 'next/link';

export default function Home({ people,  totalPages, currentPage }) {
    return (
        <main className="container mx-auto my-10 space-y-8">
        <TitleText title="Popular Actores" textStyles="text-center mt-4" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {people.map((person) => (
            <div key={person.id} className="bg-white rounded-lg shadow-md overflow-hidden">
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
                <h2 className="text-lg font-semibold text-gray-900">{person.name}</h2>
                <ul className="text-sm mt-2 text-gray-500">
                  {person.known_for.map((work) => (
                    <li key={work.id} className="truncate" title={work.original_title}>
                      {work.original_title && work.original_title.length > 20
                        ? `${work.original_title.slice(0, 20)}...`
                        : work.original_title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Link key={page} href={`?page=${page}`}>
              <a
                className={`${
                  page === currentPage ? 'font-bold text-blue-500' : 'text-gray-500'
                } mx-2`}
              >
                {page}
              </a>
            </Link>
          ))}
        </div>
      </main>
    );
}

export async function getServerSideProps({ query }) {
    const { page = 1 } = query;
    const apiKey = process.env.API_KEY;
    const language = 'en-US';

    const res = await fetch(
        `${server}/person/popular?api_key=${apiKey}&language=${language}&page=${page}`
    );
    const data = await res.json();

    return {
        props: {
            people: data.results,
            totalPages: data.total_pages,
            currentPage: parseInt(page, 10),
        },
    };
}
