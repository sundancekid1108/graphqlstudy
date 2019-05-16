//query에 대한 response
// ()=> ~  은 function(){return ()}이다
//schema에서 !은 뭔가 리턴해야한다는 것(필수사항)의미
//Mutation은 Database상태가 바뀔때 쓰는 것

import { getMovies, getMovie, getSuggestions } from "./db";

const resolvers = {
    Query: {
        movies: (_, { rating, limit }) => getMovies(limit, rating),
        movie: (_, { id }) => getMovie(id),
        suggestions: (_, { id }) => getSuggestions(id)
    }
};

export default resolvers;