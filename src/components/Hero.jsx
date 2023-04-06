// inner componets
import WelcomeSection from './hero/WelcomeSection';
import NewMovies from './hero/NewMovies';

export default function Hero({ results }) {
    return (
        <main className="text-center sm:space-y-10">
            <WelcomeSection />
            <NewMovies results={results} />
        </main>
    );
}
