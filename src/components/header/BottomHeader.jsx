import Link from 'next/link';

// icons
import { AiOutlineHome } from 'react-icons/ai';
import { VscAccount } from 'react-icons/vsc';
import { BsPeople, BsInfoCircle } from 'react-icons/bs';

export default function BottomHeader() {
    return (
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
                    <Link href="/people">
                        <a>
                            <BsPeople className="h-8 w-6 group-hover:animate-bounce" />
                        </a>
                    </Link>
                    <p className="opacity-0 group-hover:opacity-100 tracking-widest">
                        Actores
                    </p>
                </div>
            </div>
            <div>
                <div className="flex flex-col items-center cursor-pointer pt-1 overflow-hidden group w-12 sm:w-fit purple dark:text-white">
                    <Link href="/about">
                        <a>
                            <BsInfoCircle className="h-8 w-6 group-hover:animate-bounce" />
                        </a>
                    </Link>
                    <p className="opacity-0 group-hover:opacity-100 tracking-widest">
                        About
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
    );
}
