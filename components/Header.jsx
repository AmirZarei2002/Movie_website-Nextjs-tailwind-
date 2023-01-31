import Image from 'next/image';
import {
    AiOutlineHome,
    AiOutlineSearch,
    AiOutlineThunderbolt,
} from 'react-icons/ai';
import { VscAccount } from 'react-icons/vsc';
import { BsCollection, BsPatchCheck } from 'react-icons/bs';
import { RiMovie2Line } from 'react-icons/ri';

import DarkModeButton from './DarkModeButton';

import img from '../public/Designbolts-Free-Multimedia-Film.ico';
import HeaderItem from './HeaderItem';

function Header() {
    return (
        <header className="grid grid-cols gap-4 lg:gap-10 sm:flex-row m-4 items-center h-auto">
            <div className="flex justify-around lg:justify-between space-x-28 lg:space-x-0">
                <RiMovie2Line className="text-2xl flex text-white dark:hover:text-cyan-600 w-[2.5rem] h-[2.5rem]" />
                <h1 className="dark:text-cyan-500 dark:animate-pulse italic hidden sm:block md:text-2xl font-semibold">
                    Movie Lovers
                </h1>
                <DarkModeButton />
            </div>
            <div className="flex flex-grow justify-between lg:justify-around items-center">
                <HeaderItem title="HOME" Icon={AiOutlineHome} />
                <HeaderItem title="TRENDING" Icon={AiOutlineThunderbolt} />
                <HeaderItem title="VERIFIED" Icon={BsPatchCheck} />
                <HeaderItem title="COLLECTIONS" Icon={BsCollection} />
                <HeaderItem title="SEARCH" Icon={AiOutlineSearch} />
                <HeaderItem title="ACCOUNT" Icon={VscAccount} />
            </div>
            {/* <div>
               
            </div> */}
        </header>
    );
}

export default Header;
