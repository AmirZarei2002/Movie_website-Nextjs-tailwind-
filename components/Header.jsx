import Image from "next/image";
import { AiOutlineHome, AiOutlineSearch, AiOutlineThunderbolt } from 'react-icons/ai';
import { VscAccount } from 'react-icons/vsc';
import { BsCollection, BsPatchCheck } from 'react-icons/bs'

import img from '../public/Designbolts-Free-Multimedia-Film.ico'
import HeaderItem from "./HeaderItem";

function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItem title="HOME" Icon={AiOutlineHome} />
                <HeaderItem title="TRENDING" Icon={AiOutlineThunderbolt} />
                <HeaderItem title="VERIFIED" Icon={BsPatchCheck} />
                <HeaderItem title="COLLECTIONS" Icon={BsCollection} />
                <HeaderItem title="SEARCH" Icon={AiOutlineSearch} />
                <HeaderItem title="ACCOUNT" Icon={VscAccount} />
            </div>
            <Image width={80} height={70} src={img} alt="/" className="object-contain" />
        </header>
    )
}

export default Header