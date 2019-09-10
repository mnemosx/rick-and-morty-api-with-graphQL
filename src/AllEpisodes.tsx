import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost";
import { Link } from 'react-router-dom';

const FETCH_EPISODES = gql`
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

interface EpisodeData {
  episodes: Episodes
}
interface Episodes {
  results: Episode[]
}
interface Episode {
  id: number,
  name: string,
  episode: string,
  characters: Characters[],
}

interface Characters {
  name: string,
  image: string,
}
interface EpisodeVars {
  page: number
}

export const Episodes: React.FC = () => {
  const { loading, data } = useQuery<EpisodeData, EpisodeVars>(FETCH_EPISODES, { variables: { page: 1 } })
  if (loading || !data) {
    return <div className="loader">Loading...</div>;
  }
  const episodes = loading || !data ? [] : data.episodes.results;

  return (
    <div className="content-container">
      {episodes.map((item: any, index: any) => (
        // TO-DO: jāsakārto CSS klases!
        <div className="location-card" key={index}>
          <h1 className="card-title">{item.name}</h1>
          {/* TO DO: Jābūt atsevišķā komponentē */}
          <Link to={'/episodes/' + item.id} style={{ textDecoration: 'none' }}>

            <div className="episode-info hvr-grow">
              <div>
                <h4>
                  Name
              </h4>
                <p>
                  {item.name}
                </p>
              </div>
              <div>
                <h4>
                  Episode
              </h4>
                <p>
                  {item.episode}
                </p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}