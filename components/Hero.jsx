import Image from 'next/image';
// icons
import { BsArrowRightShort, BsArrowDownShort } from 'react-icons/bs';
// motion
import { motion } from 'framer-motion';
import { TitleText } from './CustomTexts';
import { navVariants } from '../utils';

// react
import React, { useRef, useState } from 'react';
// Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper styles
import 'swiper/css';
import { Autoplay } from 'swiper';
import Link from 'next/link';

export default function Hero({ results }) {
    const [hoverButton, setHoverButton] = useState();

    const handleHoverBtn = () => {
        setHoverButton(true);
    };
    const handleHoverOut = () => {
        setHoverButton(false);
    };
    const BASE_URL = 'https://image.tmdb.org/t/p/original/';
    return (
        <section className="text-center sm:space-y-10">
            <div className="sm:space-y-12 space-y-3 my-4 py-4 sm:py-10">
                <div>
                    <TitleText title="Hello and welcome to the Movie Lovers!" />
                    <TitleText
                        title="You can access many up-to-date movies on this website"
                        textStyles="font-semibold mt-4 sm:text-[1rem]"
                    />
                </div>
                <motion.div
                    className="relative"
                    variants={navVariants}
                    initial="hidden"
                    whileInView="show"
                >
                    <button
                        onMouseOver={handleHoverBtn}
                        onMouseLeave={handleHoverOut}
                        type="button"
                        className="border px-6 py-1 text-[13px] sm:text-[20px] hover:bg-[#3c79f5] hover:border-none dark:border-black/25 bg-slate-700 text-white rounded-md dark:hover:bg-[#6c00ff]"
                    >
                        <a
                            href="#categories"
                            className="items-center flex gap-2"
                        >
                            Go to categories
                            {!hoverButton ? (
                                <BsArrowRightShort className="text-lg sm:text-3xl" />
                            ) : (
                                <BsArrowDownShort className="text-lg sm:text-3xl" />
                            )}
                        </a>
                    </button>
                </motion.div>
            </div>
            <div>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    {results.map((result) => (
                        <SwiperSlide key={result.id}>
                            <div className="relative">
                                <div className="absolute z-10 left-[3%] top-[50%] md:top-[35%] lg:top-[60%] justify-start text-start">
                                    <h1 className=" text-white font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl">
                                        {result.title}
                                    </h1>
                                    <span className="font-extralight text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl">
                                        {result.release_date}
                                    </span>
                                    <div className="w-[60%]">
                                        <div className="border md:block hidden" />
                                        <p className="md:block hidden overflow-hidden text-justify lg:text-xl xl:text-2xl">
                                            {result.overview}
                                        </p>
                                    </div>
                                </div>
                                <Image
                                    layout="responsive"
                                    height={1080}
                                    width={1920}
                                    src={
                                        `${BASE_URL}${
                                            result.backdrop_path ||
                                            result.poster_path
                                        }` || `${BASE_URL}${result.poster_path}`
                                    }
                                    alt="images"
                                    className="relative opacity-95 z-0"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
