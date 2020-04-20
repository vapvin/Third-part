import React, {useState} from 'react';
import TVPresenter from './TVPresenter';

function TVContainer(){
    const [tv, setTV] = useState({
        topRated: null,
        popular: null,
        airingToday: null,
        error: null,
        loading: true
    });
    const {topRated, popular, airingToday,error,loading} = tv;
    return (
        <TVPresenter
            topRated={topRated}
            popular={popular}
            airingToday={airingToday}
            error={error}
            loading={loading}
        />
    )
}

export default TVContainer;
