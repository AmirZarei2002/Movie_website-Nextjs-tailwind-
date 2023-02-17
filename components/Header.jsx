import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// icons
import { AiOutlineHome, AiOutlineSearch } from 'react-icons/ai';
import { VscAccount } from 'react-icons/vsc';
import { BsCollection } from 'react-icons/bs';
import { RiMovie2Line } from 'react-icons/ri';

// dark mode btn
import DarkModeButton from './DarkModeButton';

// motion
import { motion } from 'framer-motion';
import { TypingText } from './CustomTexts';
import { navVariants } from '../utils';
import Link from 'next/link';

function Header() {
    const [isVisible, setIsVisible] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const hideRoutes = ['/404'];
        if (hideRoutes.includes(router.pathname)) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    }, [router.pathname]);
    return (
        <header>
            {isVisible && (
                <motion.div
                    variants={navVariants}
                    initial="hidden"
                    whileInView="show"
                    className="bg-[#b0b69e] grid grid-cols gap-4 pt-4 text-white sm:flex-row items-center h-auto dark:bg-slate-700"
                >
                    <div className="flex md:px-2 justify-around lg:justify-between sm:space-x-28 lg:space-x-0">
                        <RiMovie2Line className="text-2xl flex  dark:hover:text-cyan-600 w-[2.5rem] h-[2.5rem]" />
                        <TypingText
                            title="Movie Lovers"
                            textStyles="dark:text-cyan-500 dark:animate-pulse italic block md:text-2xl font-semibold"
                        />
                        <DarkModeButton />
                    </div>
                    <div className="flex flex-grow justify-between lg:justify-around items-center">
                        <div>
                            <div className="flex flex-col items-center cursor-pointer pt-1 overflow-hidden group w-12 sm:w-fit purple dark:text-white">
                                <Link href="/">
                                    <a>
                                        <AiOutlineHome className="h-8 w-6 group-hover:animate-bounce" />
                                    </a>
                                </Link>
                                <p className="opacity-0 group-hover:opacity-100 tracking-widest">
                                    Home
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col items-center cursor-pointer pt-1 overflow-hidden group w-12 sm:w-fit purple dark:text-white">
                                <Link href="/search">
                                    <a>
                                        <AiOutlineSearch className="h-8 w-6 group-hover:animate-bounce" />
                                    </a>
                                </Link>
                                <p className="opacity-0 group-hover:opacity-100 tracking-widest">
                                    Search
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col items-center cursor-pointer pt-1 overflow-hidden group w-12 sm:w-fit purple dark:text-white">
                                <Link href="/collections">
                                    <a>
                                        <BsCollection className="h-8 w-6 group-hover:animate-bounce" />
                                    </a>
                                </Link>
                                <p className="opacity-0 group-hover:opacity-100 tracking-widest">
                                    Collections
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col items-center cursor-pointer pt-1 overflow-hidden group w-12 sm:w-fit purple dark:text-white">
                                <Link href="/account">
                                    <a>
                                        <VscAccount className="h-8 w-6 group-hover:animate-bounce" />
                                    </a>
                                </Link>
                                <p className="opacity-0 group-hover:opacity-100 tracking-widest">
                                    Account
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="border-b-2 border-sky-700 opacity-70"></div>
                </motion.div>
            )}
        </header>
    );
}

export default Header;
