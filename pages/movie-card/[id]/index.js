import { useRouter } from 'next/router';
import { server } from '../../../config';
import requests from '../../../utils/requests';

const MovieCard = () => {
    const { router } = useRouter();
    // const {id} = router.query;
    return (
        <div className="text-center justify-center">
            <h1>the id is {id}</h1>
        </div>
    );
};

export default MovieCard;

export async function getServerSideProps(context) {
    const { id } = context.query;
    // const request = await fetch(
    //     `${server}/${id}${requests}`
    // ).then((res) => res.json());

    return {
        props: { results: request.results },
    };
}
