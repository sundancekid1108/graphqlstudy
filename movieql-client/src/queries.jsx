import gql from "graphql-tag";

export const HOME_PAGE = gql`
  {
    movies(limit: 50, rating: 7) {
      id
      title
      rating
      medium_cover_image
    }
  }
`;


/**
 * 
 * graphql-tag를 통해 frontend에서 graphql query 작성
 */