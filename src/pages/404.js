import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import bg404 from '/public/bg404.jpg';

export default function NotFound() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/');
        }, 10000);
        return () => clearTimeout(timer);
    }, [router]);
    return (
        <div
            style={{
                backgroundColor: 'black',
                backgroundImage: `url(${bg404.src})`,
                width: '100%',
                height: '100%',
                position: 'relative',
                textAlign: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',
            }}
        >
            <div className="flex flex-col items-center justify-center h-[100vh]">
                <div className="text-center max-w-[800px] m-auto">
                    <h1 className="text-[3rem] md:text-[5rem] mb-[1rem]">
                        Oops!
                    </h1>
                    <h2 className="text-[2rem] md:text-[4rem] mb-[2rem]">
                        We could not find the page you were looking for.
                    </h2>
                    <p className="text-lg md:text-[2rem] leading-10">
                        But don’t worry, you can always return to our{' '}
                        <Link href="/">
                            <a className="text-orange-200 animate-pulse font-semibold">
                                homepage
                            </a>
                        </Link>{' '}
                        and start again.
                    </p>
                </div>
            </div>
        </div>
    );
}
