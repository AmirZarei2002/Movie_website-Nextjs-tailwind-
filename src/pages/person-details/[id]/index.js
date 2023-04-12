import { useState, useEffect } from 'react';
import Image from 'next/image';

// server
import { server } from '../../../config';

// icons
import { MdCake, MdLocationOn } from 'react-icons/md';
import { BsPersonSquare, BsStarFill } from 'react-icons/bs';
import { GiHastyGrave } from 'react-icons/gi';

export default function PersonDetail({ person }) {
    const [showMoreBio, setShowMoreBio] = useState(false);
    const [birthPlace, setBirthPlace] = useState(person.place_of_birth);
    const profileImageUrl = `https://image.tmdb.org/t/p/w500/${person.profile_path}`;

    const shortBio = person.biography.slice(0, 200);
    const longBio = person.biography;

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 640) {
                const country = person.place_of_birth.split(', ')[1];
                setBirthPlace(country);
            } else {
                setBirthPlace(person.place_of_birth);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [person.place_of_birth]);

    return (
        <main className="container mx-auto my-5 space-y-4 md:space-y-4 px-2">
            <div className="md:flex md:space-x-6">
                <section className="flex flex-col gap-4">
                    <h1 className="pl-2 font-bold dark-blue text-2xl md:text-3xl">
                        {person.name}
                    </h1>
                    <Image
                        src={profileImageUrl}
                        width={300}
                        height={300}
                        alt={person.name}
                        className="rounded-t-sm"
                    />
                </section>
                <section className="text-lg md:mt-[2.7rem]">
                    <div className="pl-2 text-start flex flex-col space-y-3 md:space-y-5">
                        <h2 className="font-semibold purple text-xl md:text-2xl">
                            Personal Info
                        </h2>
                        <div className="text-slate-700 dark:text-[#f2deba] dark:opacity-80 flex flex-col space-y-3 md:space-y-6">
                            <div className="flex items-center gap-2 text-[20px]">
                                <MdCake className="text-orange-400" />
                                <span>{person.birthday}</span>
                            </div>
                            {person.deathday && (
                                <div className="flex items-center gap-2 text-[20px]">
                                    <GiHastyGrave className="text-gray-600" />
                                    <span>{person.deathday}</span>
                                </div>
                            )}
                            <div className="flex items-center gap-2 text-[20px]">
                                <MdLocationOn className="text-blue-500" />
                                <span>{birthPlace}</span>
                            </div>
                            <div className="flex items-center gap-2 text-[20px]">
                                <BsPersonSquare className="text-slate-600" />
                                <span>{person.known_for_department}</span>
                            </div>
                            <div className="flex items-center gap-2 text-[20px]">
                                <BsStarFill className="text-yellow-500" />
                                <span>{person.popularity}</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
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
