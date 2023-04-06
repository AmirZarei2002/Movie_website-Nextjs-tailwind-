// inner componets
import Cards from '../components/actores/Cards';
import Pagination from '../components/actores/Pagination';
import { TitleText } from '../components/common/CustomTexts';

import { server } from '../config';


export default function Home({ people, totalPages, currentPage }) {
    return (
        <main className="container mx-auto my-10 space-y-12">
            <TitleText title="Popular Actores" textStyles="text-center mt-4" />
            <Cards people={people} />
            <Pagination currentPage={currentPage} totalPages={totalPages} />
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
