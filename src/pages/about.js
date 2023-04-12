/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';

// motion
import { motion } from 'framer-motion';
import { fadeIn } from '../utils';

export default function About() {
    return (
        <main className="container mx-auto my-10 flex flex-col space-y-8 md:space-y-12">
            <motion.h1
                variants={fadeIn('right', 'Inertia', 0.3, 1)}
                initial="hidden"
                whileInView="show"
                className="sky text-xl md:text-2xl lg:text-3xl px-2 text-center font-bold"
            >
                What should you know about the Movie Lovers?
            </motion.h1>
            <motion.p
                variants={fadeIn('right', 'Inertia', 0.4, 2)}
                initial="hidden"
                whileInView="show"
                className="text-slate-700 dark:text-[#f2deba] px-3 md:px-5 text-md md:text-xl text-justify leading-10 md:leading-[2.5rem]"
            >
                <span className="font-semibold dark:text-slate-200 text-md md:text-xl lg:text-2xl">
                    Welcome to your website!
                </span>{' '}
                My name is{' '}
                <span className="font-semibold hover:text-blue-600 text-purple-600 animate-pulse">
                    <Link href="https://amirzarei.iran.liara.run/">
                        <a target="_blank">Amirhossein Zarei</a>
                    </Link>
                </span>
                , and I am a passionate movie enthusiast. Ever since I was a
                child, I have been captivated by the magic of movies and their
                ability to transport us to different worlds, spark our
                imaginations, and move us to tears or laughter.
                <br /> As I grew older, my love for movies only intensified. I
                spent countless hours watching classic films, studying film
                history, and exploring the works of the greatest directors and
                actors of all time. Now, with this website, I want to share my
                passion for movies with the world.
                <br />
                Here, you will find a carefully curated selection of film
                reviews, recommendations, and insights, covering a wide range of
                genres, styles, and eras. Whether you're a casual moviegoer or a
                serious cinephile, there's something for everyone here.
                <br /> My goal with this website is not just to inform, but also
                to inspire. I believe that movies have the power to change us,
                to challenge our assumptions, and to open our minds and hearts
                to new perspectives.
                <br /> Through my writing, I hope to spark meaningful
                conversations about the movies we love, and to encourage a
                deeper appreciation and understanding of this remarkable art
                form. So, whether you're looking for the latest blockbusters or
                hidden gems, I invite you to join me on this cinematic journey.
                <br /> Let's explore the world of movies together, and discover
                the endless possibilities of storytelling on the silver screen.
            </motion.p>
        </main>
    );
}
