import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost";
import { Link } from 'react-router-dom';
import { EpisodeCard } from './EpisodeCard';
import { EpisodeData, AllEpisodeVars } from './interfaces'


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

// interface EpisodeData {
//   episodes: Episodes
// }
// interface Episodes {
//   results: Episode[]
// }
// interface Episode {
//   id: number,
//   name: string,
//   episode: string,
//   characters: Characters[],
// }

// interface Characters {
//   name: string,
//   image: string,
// }
// interface EpisodeVars {
//   page: number
// }

export const AllEpisodes: React.FC = () => {
  const { loading, data } = useQuery<EpisodeData, AllEpisodeVars>(FETCH_EPISODES, { variables: { page: 1 } })
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
          <Link to={'/episodes/' + item.id} style={{ textDecoration: 'none' }}>
            <EpisodeCard props={item} />
          </Link>
        </div>
      ))}
    </div>
  )
}