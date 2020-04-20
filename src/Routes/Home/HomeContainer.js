import React, {useState} from 'react';
import HomePresenter from './HomePresenter'

function HomeContainer(){
    const [movies, setMovies] = useState({
        nowPlaying: null,
        upcoming: null,
        popular: null,
        error: null,
        loading: true
    });

    const {nowPlaying, upcoming, popular, error, loading} = movies;
    return (
        <HomePresenter nowPlaying={nowPlaying} upcoming={upcoming} popular={popular} error={error} loading={loading} />
    )
}

export default HomeContainer;

// Class Component Version..
// export default class extends React.Component{
//     state = {
//         nowPlaying: null,
//         upcoming: null,
//         popular: null,
//         error: null,
//         loading: true
//     }
//
//     render(){
//         const {nowPlaying, upcoming, popular, error, loading} = state;
//         return (
//             <HomePresenter nowPlaying={nowPlaying} upcoming={upcoming} popular={popular} error={error} loading={loading} />
//         )
//     }
// }