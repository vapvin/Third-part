import React, {useState} from 'react';
import SearchPresenter from './SearchPresenter';

function SearchContainer(){
    const [search, setSearch] = useState({
        movieResults: null,
        tvResults: null,
        searchTerm: '',
        error: null,
        loading: false
    });
    const {movieResults, tvResults, searchTerm,error,loading} = search;
    return (
        <SearchPresenter
            movieResults={movieResults}
            tvResults={tvResults}
            searchTerm={searchTerm}
            error={error}
            loading={loading}
        />
    )
}

export default SearchContainer;
