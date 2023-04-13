import Image from 'next/image';

// motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../../utils';

export default function ActoreHeaderInfo({ person }) {
    const profileImageUrl = `https://image.tmdb.org/t/p/w500/${person.profile_path}`;
    return (
        <motion.section
            variants={fadeIn('right', 'Inertia', 0.1, 2)}
            initial="hidden"
            whileInView="show"
            className="flex flex-col gap-4"
        >
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
        </motion.section>
    );
}
