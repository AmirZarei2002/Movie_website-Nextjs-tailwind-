import { useState, useEffect } from 'react';

// icons
import { MdCake, MdLocationOn } from 'react-icons/md';
import { BsPersonSquare, BsStarFill } from 'react-icons/bs';
import { GiHastyGrave } from 'react-icons/gi';

export default function ActorePersonalInfo({ person }) {
    const [birthPlace, setBirthPlace] = useState(person.place_of_birth);
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
    );
}
