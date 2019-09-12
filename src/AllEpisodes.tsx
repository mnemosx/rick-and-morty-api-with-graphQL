import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import { EpisodeCard } from './EpisodeCard';
import { EpisodeData, Episode, AllResponseVars } from './interfaces'
import { Waypoint } from 'react-waypoint';
import { FETCH_EPISODES } from './requests';

export const AllEpisodes: React.FC = () => {
  const { loading, data, fetchMore } = useQuery<EpisodeData, AllResponseVars>(FETCH_EPISODES, { variables: { page: 1 } })
  if (loading || !data) {
    return <div className="loader">Loading...</div>;
  }
  const episodes = loading || !data ? [] : data.episodes.results;

  const scrollEnd = () => fetchMore({
    variables: {
      page: episodes.length / 20 + 1
    },
    updateQuery: (prev, { fetchMoreResult }) => {
      if (!fetchMoreResult) return prev;
      return {
        episodes: {
          __typename: 'Episodes',
          results: [
            ...prev.episodes.results,
            ...fetchMoreResult.episodes.results
          ]
        }
      }
    }
  })

  return (
    <div className="content-container">
      {episodes.map((item: Episode, index: number) => (
        // TO-DO: jāsakārto CSS klases!
        <div className="location-card" key={index}>
          <h1 className="card-title">{item.name}</h1>
          <Link to={'/episodes/' + item.id} style={{ textDecoration: 'none' }}>
            <EpisodeCard className="hvr-grow" props={item} />

            {index === episodes.length - 3 && (
              <Waypoint onEnter={() => { scrollEnd() }}>
              </Waypoint>
            )}

          </Link>
        </div>
      ))}
    </div>
  )
}