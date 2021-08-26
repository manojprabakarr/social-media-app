import gql from "graphql-tag";

export const Fetch_Posts_Query = gql`
  query getposts {
    getposts {
      id
      body
      createdAt
      username
      likesCount
      likes {
        username
      }
      commentsCount
      comments {
        id
        username
        createdAt
        body
      }
    }
  }
`;
