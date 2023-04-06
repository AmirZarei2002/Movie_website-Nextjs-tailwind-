import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// motion
import { motion } from 'framer-motion';
import { navVariants } from '../utils';

// inner components
import TopHeader from './header/TopHeader'
import BottomHeader from './header/BottomHeader'

export default function Header() {
    const [isVisible, setIsVisible] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const hideRoutes = ['/404'];
        if (hideRoutes.includes(router.pathname)) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    }, [router.pathname]);
    return (
        <header>
            {isVisible && (
                <motion.div
                    variants={navVariants}
                    initial="hidden"
                    whileInView="show"
                    className="bg-[#b0b69e] grid grid-cols gap-4 pt-4 text-white sm:flex-row items-center h-auto dark:bg-slate-700"
                >
                    <TopHeader />
                    <BottomHeader />
                    <div className="border-b-2 border-sky-700 opacity-70"></div>
                </motion.div>
            )}
        </header>
    );
}