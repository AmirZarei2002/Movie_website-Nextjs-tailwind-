import { useRouter } from 'next/router';
import React from 'react';

const ResultPage = () => {
    const router = useRouter();
    const result = router.query.result;
    return (
        <div>
            {result.vote_count}
        </div>
    );
};

export default ResultPage;
