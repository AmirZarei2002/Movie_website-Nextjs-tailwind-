import { useRouter } from 'next/router';
import requests from '../utils/requests';

// motion
import { motion } from 'framer-motion';
import { navVariants } from '../utils';


const Navbar = () => {
    const router = useRouter();
    return (
        <motion.nav variants={navVariants} initial="hidden"
        whileInView="show" className="relative">
            <div className="flex px-6 sm:px-20 pb-4 text-lg sm:text-xl md:text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
                {Object.entries(requests).map(([key, { title, url }]) => (
                    <h2
                        key={key}
                        onClick={() => router.push(`/?genre=${key}`)}
                        className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:hover:text-sky-400 active:text-red-500"
                    >
                        {title}
                    </h2>
                ))}
            </div>
            <div className="absolute top-0 right-0 bg-gradient-to-l form-[#06202A] h-10 w-1/12" />
            <div className="border opacity-70"></div>
        </motion.nav>
    );
};

export default Navbar;
