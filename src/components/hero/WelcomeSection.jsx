import React, { useState } from 'react';
// motion
import { motion } from 'framer-motion';
import { TitleText } from '../../components/common/CustomTexts';
import { navVariants } from '../../utils';

// icons
import { BsArrowRightShort, BsArrowDownShort } from 'react-icons/bs';

export default function WelcomeSection() {
    const [hoverButton, setHoverButton] = useState();

    const handleHoverBtn = () => {
        setHoverButton(true);
    };
    const handleHoverOut = () => {
        setHoverButton(false);
    };

    return (
        <section className="sm:space-y-12 space-y-3 my-4 py-4 sm:py-10">
            <div>
                <TitleText title="Hello and welcome to the Movie Lovers!" />
                <TitleText
                    title="You can access to many up-to-date movies on this website"
                    textStyles="font-semibold mt-[0.5rem] md:mt-3 sm:text-[1rem]"
                />
            </div>
            <motion.div
                className="relative"
                variants={navVariants}
                initial="hidden"
                whileInView="show"
            >
                <button
                    onMouseOver={handleHoverBtn}
                    onMouseLeave={handleHoverOut}
                    type="button"
                    className="border px-3 md:px-6 md:py-1 text-[13px] sm:text-[20px] hover:bg-[#3c79f5] hover:border-none dark:border-black/25 bg-slate-700 text-white rounded-tr-md rounded-bl-md dark:hover:bg-[#6c00ff] h-[2rem] md:h-[2.5rem]"
                >
                    <a href="#categories" className="items-center flex gap-2">
                        Go to categories
                        {!hoverButton ? (
                            <BsArrowRightShort className="text-lg sm:text-3xl" />
                        ) : (
                            <BsArrowDownShort className="text-lg sm:text-3xl" />
                        )}
                    </a>
                </button>
            </motion.div>
        </section>
    );
}
