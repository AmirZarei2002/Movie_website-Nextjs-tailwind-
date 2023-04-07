import '../styles/globals.css';
import MainLayout from '../Layouts/mainLayout';

import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider attribute="class">
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </ThemeProvider>
    );
}

export default MyApp;
