import Image from 'next/image';
// logo image
import logoImg from '../../../public/movie-lovers-logo.png';
// dark mode btn
import DarkModeButton from '../common/DarkModeButton';
// TypingText
import { TypingText } from '../common/CustomTexts';
import Link from 'next/link';

export default function TopHeader() {
    return (
        <div className="flex pr-2 justify-between items-center md:justify-around lg:justify-between">
            <Link href="/">
                <a>
                    <Image
                        src={logoImg}
                        alt="movie-lovers-logo"
                        width={55}
                        height={55}
                        className="flex dark:hover:text-cyan-600"
                    />
                </a>
            </Link>
            <TypingText
                title="Movie Lovers"
                textStyles="dark:text-cyan-500 italic block text-[23px] md:text-3xl font-semibold pr-7 animate-pulse"
            />
            <DarkModeButton />
        </div>
    );
}
