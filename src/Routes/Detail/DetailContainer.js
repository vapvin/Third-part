import React, {useState} from 'react';
import DetailPresenter from './DetailPresenter';

function DetailContainer(){
    const [detail, setDetail] = useState({
        result: null,
        loading: true,
        error: null
    });
    const {loading, error} = detail;
    return(
        <DetailPresenter
            result={result}
            loading={loading}
            error={error}
        />
    )
}

export default DetailContainer;