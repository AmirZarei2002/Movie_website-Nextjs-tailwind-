// motion
import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../../utils';

// TypingText
export const TypingText = ({ title, textStyles }) => (
    <motion.p
        variants={textContainer}
        className={`font-normal text-[18px] text-secondary-white ${textStyles}`}
    >
        {Array.from(title).map((letter, index) => (
            <motion.span variants={textVariant2} key={index}>
                {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
        ))}
    </motion.p>
);

// TitleText
export const TitleText = ({ title, textStyles }) => (
    <motion.h2
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        className={`font-bold text-[17px] md:text-[30px] sky dark:text-cyan-500 ${textStyles}`}
    >
        {title}
    </motion.h2>
);
