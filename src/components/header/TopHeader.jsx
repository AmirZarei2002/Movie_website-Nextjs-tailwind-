import Image from 'next/image';
// logo image
import logoImg from '../../../public/movie-lovers-logo.png'
// dark mode btn
import DarkModeButton from '../common/DarkModeButton';
// TypingText
import { TypingText } from '../common/CustomTexts';


export default function TopHeader() {
    return (
        <div className="flex px-2 justify-between items-center md:justify-around lg:justify-between">
            <Image src={logoImg} alt="movie-lovers-logo" width={55} height={55} className="flex dark:hover:text-cyan-600" />
            <TypingText
                title="Movie Lovers"
                textStyles="dark:text-cyan-500 dark:animate-pulse italic block md:text-2xl font-semibold pr-7"
            />
            <DarkModeButton />
        </div>
    );
}