import Image from 'next/image';
import { server } from '../../../config';
// icons
import { FiStar } from 'react-icons/fi';
import { AiOutlineRise, AiOutlineLineChart } from 'react-icons/ai';
// motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../../utils';

const MovieCard = ({ card }) => {
    console.log(card);
    const BASE_URL = 'https://image.tmdb.org/t/p/original/';
    return (
        <main className="my-[2rem] w-100 h-100 lg:w-[90%] space-y-6 mx-auto">
            {/* main details */}
            <section className="flex justify-between mx-1 text-start space-y-2">
                <div>
                    <h1 className="font-semibold text-2xl lg:text-3xl xl:text-4xl dark-blue">
                        {card.title || card.original_name}
                    </h1>
                    <p className="font-mono sm:text-xl text-white">
                        {card.release_date || card.first_air_date}
                    </p>
                </div>
                <div className="md:flex hidden space-x-4 text-white">
                    <div className="flex flex-col items-center">
                        <h3 className="capitalize font-semibold text-xl">
                            vote average
                        </h3>
                        <div className="flex items-center space-x-1">
                            <AiOutlineLineChart className="text-2xl text-yellow-500" />
                            <p className="text-lg">{card.vote_average}</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <h3 className="capitalize font-semibold text-xl">
                            youre rating
                        </h3>
                        <div className="flex items-center space-x-1 dark-blue">
                            <FiStar className="text-2xl hover:text-purple-500" />
                            <p className="text-lg">Rate</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <h3 className="capitalize font-semibold text-xl">
                            vote count
                        </h3>
                        <div className="flex items-center space-x-1">
                            <AiOutlineRise className="text-2xl text-green-500" />
                            <p className="text-lg">{card.vote_count}</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <Image
                    layout="responsive"
                    height={860}
                    width={1920}
                    src={
                        `${BASE_URL}${
                            card.backdrop_path || card.poster_path
                        }` || `${BASE_URL}${card.poster_path}`
                    }
                    alt="images"
                />
            </section>
            <section className="ml-1 lg:ml-0 space-y-6">
                <div className="text-white flex space-x-3">
                    {card.genres.map((genre) => (
                        <h2 className="border rounded-xl text-slate-900 dark:text-white py-[2px] px-2">
                            {genre.name}
                        </h2>
                    ))}
                </div>
                <div className="w-[90%] space-y-2 ml-2 sm:ml-0 text-white">
                    <h2 className="text-lg sky md:text-xl font-semibold">
                        "{card.tagline}"
                    </h2>
                    <p className="text-justify md:text-lg">{card.overview}</p>
                </div>
                <div className="flex md:hidden space-x-4">
                    <div className="flex flex-col items-center">
                        <h3 className="capitalize font-semibold text-sm text-slate-900 dark:text-purple-700">
                            vote average
                        </h3>
                        <div className="flex items-center space-x-1">
                            <AiOutlineLineChart className="text-xl text-yellow-500" />
                            <p className="text-white">{card.vote_average}</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <h3 className="capitalize font-semibold text-sm text-slate-900 dark:text-purple-700">
                            youre rating
                        </h3>
                        <div className="flex items-center space-x-1 dark-blue">
                            <FiStar className="text-xl hover:text-purple-500" />
                            <p className="text-white">Rate</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <h3 className="capitalize font-semibold text-sm text-slate-900 dark:text-purple-700">
                            vote count
                        </h3>
                        <div className="flex items-center space-x-1">
                            <AiOutlineRise className="text-xl text-green-500" />
                            <p className="text-white">{card.vote_count}</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default MovieCard;

export async function getServerSideProps(context) {
    const { id } = context.query;
    const res = await fetch(
        `${server}/movie/${id}?api_key=${process.env.API_KEY}`
    );
    const card = await res.json();
    return {
        props: {
            card,
        },
    };
}
