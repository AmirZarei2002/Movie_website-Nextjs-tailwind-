import { MdThumbUp } from 'react-icons/md';
import Image from 'next/image';
import React, { forwardRef } from 'react';
import Link from 'next/link';
import Router from 'next/router';

// motion
import { motion } from 'framer-motion';
import { fadeIn } from '../utils';

const Thumbnail = forwardRef(({ result }, ref) => { 

    const BASE_URL = 'https://image.tmdb.org/t/p/original/';
    return (
        <div className="p-2 group shadow-xl m-2 cursor-pointer overflow-hidden relative transition duration-200 ease-in transform bg-cream dark:bg-[#273d3f] rounded-t-[5px] hover:scale-105 hover:z-50">
            <Image
                layout="responsive"
                height={1080}
                width={1920}
                src={
                    `${BASE_URL}${
                        result.backdrop_path || result.poster_path
                    }` || `${BASE_URL}${result.poster_path}`
                }
                alt="images"
                className="rounded-t-md"
            />
            <motion.div
                initial="hidden"
                whileInView="show"
                variants={fadeIn('right', 'tween', 0.2, 1)}
                className="p-2 space-y-2"
            >
                <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
                    {result.title || result.original_name}
                </h2>
                <p className="truncate max-w-md dark-blue">{result.overview}</p>
                <p className="flex items-center sm:opacity-0 group-hover:opacity-100 dark-blue">
                    {result.media_type && `${result.media_type} •`}{' '}
                    {result.release_date || result.first_air_date} •{' '}
                    <MdThumbUp className="h-5 mx-2" />
                    {result.vote_count}
                </p>
                <button className="bg-slate-900 hidden hover:-translate-y-1 duration-300 lg:block font-semibold p-2 rounded-md w-full">
                    <Link
                        href="movie-card/[id]"
                        as={`/movie-card/${result.id}`}
                    >
                        more details
                    </Link>
                </button>
            </motion.div>
        </div>
    );
});

Thumbnail.displayName = 'Thumbnail';

export default Thumbnail;
