import { gql } from "apollo-boost";

export const FETCH_EPISODES = gql`
query fetchEpisodes($page: Int!) {
  episodes(page: $page) {
     results {
      id
      name
      air_date
      episode
      characters {
        name
      }
    }
}
}
`;

export const FETCH_LOCATIONS = gql`
  query fetchLocations($page: Int!) {
      locations(page: $page) {
        results {
          id
          name
          type
          dimension
        }
      }
  }
`;

export const FETCH_CHARS = gql`
  query fetchCharacters($page: Int!) {
    characters(page: $page) {
      results {
        id
        name
        image
      }
    }
  }
`;

export const FETCH_SINGLE_CHAR = gql`
query fetchCharacters($id: ID) {
  character(id: $id) {
    id
    name
    image
    status
    species
    type
    gender
    location {
       name
    }
    origin {
      name
    }
    episode {
      name 
      episode
    }
  }
}
`;

export const FETCH_EP_CHARS = gql`
query fetchEpisode($id: ID) {
  episode(id: $id) {
    id
    name
    air_date
    episode
    characters {
      id
      name
      image
    }
  }
}
`;