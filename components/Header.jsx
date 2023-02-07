// icons
import {
    AiOutlineHome,
    AiOutlineSearch,
    AiOutlineThunderbolt,
} from 'react-icons/ai';
import { VscAccount } from 'react-icons/vsc';
import { BsCollection, BsPatchCheck } from 'react-icons/bs';
import { RiMovie2Line } from 'react-icons/ri';

// dark mode btn
import DarkModeButton from './DarkModeButton';

// components
import HeaderItem from './HeaderItem';

// motion
import { motion } from 'framer-motion';
import { TypingText } from './CustomTexts';
import { navVariants } from '../utils';

function Header() {
    return (
        <motion.header
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
                <HeaderItem title="HOME" Icon={AiOutlineHome} />
                <HeaderItem title="TRENDING" Icon={AiOutlineThunderbolt} />
                <HeaderItem title="VERIFIED" Icon={BsPatchCheck} />
                <HeaderItem title="COLLECTIONS" Icon={BsCollection} />
                <HeaderItem title="ACCOUNT" Icon={VscAccount} />
            </div>
            <div className="border-b-2 border-sky-700 opacity-70"></div>
        </motion.header>
    );
}

export default Header;
