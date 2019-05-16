import React from "react";
import {Query} from "react-apollo";
import {HOME_PAGE} from "./queries";


const Home = () => <Query query ={HOME_PAGE}>
{
    ({loading, data, error}) => {
        if(loading) return <span>Loading</span>;
        if(error) return <span>Error!</span>;
        return data.movies.map(movie => (<h2 key={movie.id}>{movie.title} / {movie.rating}</h2>)) ;
    }
}</Query>;
/**
 * render prop으로 출력
 * redux, fetch, state없이 가능
 * loading error data 로 처리 
 */

export default Home;

