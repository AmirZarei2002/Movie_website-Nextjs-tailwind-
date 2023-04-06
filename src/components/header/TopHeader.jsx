// icons
import { RiMovie2Line } from 'react-icons/ri';
// dark mode btn
import DarkModeButton from '../common/DarkModeButton';
// TypingText
import { TypingText } from '../common/CustomTexts';

export default function TopHeader() {
    return (
        <div className="flex md:px-2 justify-around lg:justify-between sm:space-x-28 lg:space-x-0">
            <RiMovie2Line className="text-2xl flex dark:hover:text-cyan-600 w-[2.5rem] h-[2.5rem]" />
            <TypingText
                title="Movie Lovers"
                textStyles="dark:text-cyan-500 dark:animate-pulse italic block md:text-2xl font-semibold"
            />
            <DarkModeButton />
        </div>
    );
}