import { useState, useEffect } from 'react';

// server
import { server } from '../../../config';

import ActoreHeaderInfo from '../../../components/actores/person-card/ActoreHeaderInfo';
import ActorePersonalInfo from '../../../components/actores/person-card/ActorePersonalInfo';
import ActoreBiography from '../../../components/actores/person-card/ActoreBiography';

export default function PersonDetail({ person }) {
    return (
        <main className="container mx-auto my-5 space-y-4 md:space-y-4 px-2">
            <div className="md:flex md:space-x-6">
                <ActoreHeaderInfo person={person} />
                <ActorePersonalInfo person={person} />
            </div>
            <ActoreBiography person={person} />
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
