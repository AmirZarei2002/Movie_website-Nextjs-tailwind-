import { useRouter } from 'next/router';

const MovieCard = () => {
    const { router, isReady } = useRouter();
    // const result = router.query.result
    // console.log('isReady:', isReady)
    return (
        <div className="text-center justify-center">
            <button className='text-white text-xl' onClick={() => router.back()}>
                back 
            </button>
        </div>
    );
};

export default MovieCard;
