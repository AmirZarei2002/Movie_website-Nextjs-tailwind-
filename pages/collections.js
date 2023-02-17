import { server } from '../config';

export default function Home({ collections }) {
    console.log(collections);
    return (
        <main>
            <div>
                {collections.map((collection) => (
                    <div key={collection.id}>
                        <h2>{collection.name}</h2>
                        <p>{collection.overview}</p>
                    </div>
                ))}
            </div>
        </main>
    );
}

export async function getServerSideProps() {
    const res = await fetch(
        `${server}/collection?api_key=${process.env.API_KEY}`
    );
    const collections = await res.json();

    return {
        props: {
            collections,
        },
    };
}
