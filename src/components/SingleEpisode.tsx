import React from 'react'
import { RouteComponentProps, Link } from "react-router-dom";
import { useQuery } from '@apollo/react-hooks';
import { EpisodeCard } from './EpisodeCard'
import { MatchParams, EpResponse, SingleResponseVars } from '../interfaces'
import { FETCH_EP_CHARS } from '../requests';
import { CharCard } from './CharCard';

export const SingleEpisode: React.FC<RouteComponentProps<MatchParams>> = ({ match }) => {
  const { loading, data } = useQuery<EpResponse, SingleResponseVars>(FETCH_EP_CHARS, { variables: { id: parseInt(match.params.id) } })
  if (loading || !data || !data.episode) {
    return <div className="loader">Loading...</div>;
  }
  const episode = data.episode;
  const characters = episode.characters;

  return (
    <div className="content-container">
      <div className="single-episode-card">
        <h1 className="card-title">{episode.name}</h1>
        <p className="ep-air-date">{episode.air_date}</p>
        <EpisodeCard className="episode-info" props={episode} />
      </div>
      <h4 className="single-subtitle">All the characters that appeared on this episode:</h4>
      <div className="char-cards-container">
        {characters.map((item: any, index: number) => (
          <Link to={'/characters/' + item.id} style={{ textDecoration: 'none' }} key={index}>
            <CharCard props={item} />
          </Link>
        ))}
      </div>
    </div>
  )
}