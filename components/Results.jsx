import { useState, useEffect } from 'react';
import Thumbnail from './Thumbnail';
import FlipMove from 'react-flip-move';
// motion
import { motion } from 'framer-motion';
import { fadeIn } from '../utils';

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
            <motion.input
                initial="hidden"
                whileInView="show"
                variants={fadeIn('right', 'tween', 0.2, 1)}
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                className="w-[20%] px-2 mt-10 focus:outline-none text-black
         dark:text-white
         text-[20px] rounded-tr-md rounded-bl-md m-auto block text-center"
            />
            <FlipMove
                className="px-5 mb-10 mt-4 sm:grid md:grid-cols-2 xl:grid-cols-3
    3xl:flex flex-wrap justify-center"
            >
                {filteredResults.map((result) => (
                    <Thumbnail key={result.id} result={result} />
                ))}
            </FlipMove>
        </div>
    );
};

export default Results;
