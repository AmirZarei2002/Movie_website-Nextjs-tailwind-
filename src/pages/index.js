import Head from 'next/head';
import Categories from '../components/main/Categories';
import requests from '../utils/requests';
import Results from '../components/main/Results';
import Hero from '../components/Hero';

// server
import { server } from '../config';

export default function Home({ results }) {
    return (
        <div>
            <Head>
                <title>movie-website</title>
                <meta
                    name="description"
                    content="A movie website with many features"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero results={results} />
            <Categories />
            <Results results={results} />
        </div>
    );
}

export async function getServerSideProps(context) {
    const genre = context.query.genre;
    const request = await fetch(
        `${server}${requests[genre]?.url || requests.fetchTrending.url}`
    ).then((res) => res.json());

    return {
        props: {
            results: request.results,
        },
    };
}
