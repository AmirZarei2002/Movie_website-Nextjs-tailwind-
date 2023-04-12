import { useState } from 'react';

export default function ActoreBiography({ person }) {
    const [showMoreBio, setShowMoreBio] = useState(false);
    const shortBio = person.biography.slice(0, 200);
    const longBio = person.biography;
    return (
        <section className="text-md px-2 text-slate-700 space-y-1">
            <h2 className="font-semibold purple text-xl md:text-2xl">
                Biography
            </h2>
            <p
                className="leading-7 text-justify dark:text-white/70"
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
    );
}
