import Image from 'next/image';
import Link from 'next/link';

// motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils';

export default function Cards({ people }) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {people.map((person) => (
                <motion.div
                    variants={fadeIn('right', 'Inertia', 0.2, 1)}
                    initial="hidden"
                    whileInView="show"
                    key={person.id}
                    className="bg-white dark:bg-[#273d3f] rounded-lg shadow-md overflow-hidden"
                >
                    <div className="relative pb-2/3 transition duration-200 ease-in transform hover:scale-105 hover:z-50">
                        <Link
                            href="person-details/[id]"
                            as={`/person-details/${person.id}`}
                        >
                            <Image
                                src={`https://image.tmdb.org/t/p/w400${person.profile_path}`}
                                width={300}
                                height={300}
                                alt={person.name}
                                className="object-center object-cover cursor-pointer"
                            />
                        </Link>
                    </div>
                    <div className="p-4">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {person.name}
                        </h2>
                        <ul className="text-sm mt-2 text-gray-500 dark:text-white/70">
                            {person.known_for.map((work) => (
                                <li
                                    key={work.id}
                                    className="truncate"
                                    title={work.original_title}
                                >
                                    {work.original_title &&
                                    work.original_title.length > 20
                                        ? `${work.original_title.slice(
                                              0,
                                              20
                                          )}...`
                                        : work.original_title}
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
