import { useRouter } from 'next/router';
import React from 'react';

const ResultPage = () => {
    const router = useRouter();
    const result = router.query.result;
    return (
        <div>
            {/* {result.vote_count} */} this page is going to conclude the each movie card
        </div>
    );
};

export default ResultPage;
