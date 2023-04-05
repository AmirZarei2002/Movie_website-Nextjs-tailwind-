import { server } from '../../../config';

export default function PersonDetail({ person }) {
    return (
       <div>
        {person.biography}
       </div>
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
