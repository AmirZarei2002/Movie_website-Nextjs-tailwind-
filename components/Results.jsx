import { useState, useEffect } from 'react';
import Thumbnail from './Thumbnail';
// import FlipMove from 'react-flip-move';

// motion
import { motion } from 'framer-motion';
import { fadeIn, navVariants } from '../utils';
import { TypingText } from './CustomTexts';

const Results = ({ results }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredResults, setFilteredResults] = useState(results);

    useEffect(() => {
        setFilteredResults(
            results.filter((result) =>
                result.title?.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, results]);

    return (
        <div>
            <div className="text-center space-y-6 my-20">
                <div>
                    <motion.div
                        variants={navVariants}
                        initial="hidden"
                        whileInView="show"
                        className=""
                    >
                        <TypingText
                            title="What movie are you looking for?"
                            textStyles="text-xl md:text-2xl dark:text-blue-400 purple mt-10"
                        />
                    </motion.div>
                </div>
                <motion.input
                    initial="hidden"
                    whileInView="show"
                    variants={fadeIn('right', 'tween', 0.2, 1)}
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    className="w-[70%] md:w-[50%] lg:w-[40%] px-2 focus:outline-none text-black
                dark:text-white
                text-[20px] rounded-tr-md rounded-bl-md m-auto block text-center"
                />
            </div>
            <div>
                <div
                    className="px-5 mb-10 mt-4 sm:grid md:grid-cols-2 xl:grid-cols-3
                3xl:flex flex-wrap justify-center"
                >
                    {filteredResults.map((result) => (
                        <Thumbnail key={result.id} result={result} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Results;
