import '../styles/globals.css';
import MainLayout from '../Layouts/mainLayout';

import { motion, useScroll, useSpring } from "framer-motion";

import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
    const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
    return (
        <>
        <motion.div className="progress-bar" style={{ scaleX }} />
        <ThemeProvider attribute="class">
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </ThemeProvider>
            </>
    );
}

export default MyApp;
