import { motion } from 'framer-motion';
import { TitleText } from './CustomTexts';

export default function Hero() {
    return (
        <section className="text-center">
            <div className="space-y-2">
                <TitleText title="Hello and welcome to the Movie Lovers!" />
            </div>
        </section>
    );
}
