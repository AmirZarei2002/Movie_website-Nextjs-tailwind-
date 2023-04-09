import { useState } from 'react';
import Image from 'next/image';
import { server } from '../../../config';

export default function PersonDetail({ person }) {
    const [showMoreBio, setShowMoreBio] = useState(false);
    const profileImageUrl = `https://image.tmdb.org/t/p/w500/${person.profile_path}`;

    const shortBio = person.biography.slice(0, 200);
    const longBio = person.biography;

    return (
        <main className="container mx-auto my-5 space-y-6">
            {/* personal info */}
            <section className="text-center flex">
                <Image
                    src={profileImageUrl}
                    width={200}
                    height={250}
                    alt={person.name}
                    className="rounded-r-sm"
                />
                <div className="pl-2 text-start flex flex-col space-y-2">
                    <h1 className="font-bold dark-blue text-2xl">
                        {person.name}
                    </h1>
                    <div className="text-slate-700 flex flex-col">
                        <span>{person.birthday}</span>
                        <span>{person.deathday}</span>
                        <span>{person.place_of_birth}</span>
                        <span>{person.known_for_department}</span>
                        <span>{person.popularity}</span>
                    </div>
                </div>
            </section>
            <section className="text-md px-2 text-slate-700 space-y-2">
                <h2 className="font-semibold purple text-xl">Biography</h2>
                <p
                    className="leading-7 text-justify"
                    dangerouslySetInnerHTML={{
                        __html: showMoreBio ? longBio : shortBio,
                    }}
                ></p>
                {person.biography.length > 200 && (
                    <button
                        className="text-blue-500 underline"
                        onClick={() => setShowMoreBio(!showMoreBio)}
                    >
                        {showMoreBio ? 'Read Less' : 'Read More'}
                    </button>
                )}
            </section>
        </main>
    );
}

export async function getServerSideProps(context) {
    const apiKey = process.env.API_KEY;
    const language = 'en-US';

    const { id } = context.query;

    const res = await fetch(
        `${server}/person/${id}?api_key=${apiKey}&language=${language}`
    );

    const data = await res.json();

    return {
        props: {
            person: data,
        },
    };
}
