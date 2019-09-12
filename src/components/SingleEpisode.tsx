import React from 'react'
import { RouteComponentProps, Link } from "react-router-dom";
import { useQuery } from '@apollo/react-hooks';
import { Card } from 'react-bootstrap';
import { EpisodeCard } from './EpisodeCard'
import { MatchParams, EpResponse, SingleResponseVars } from '../interfaces'
import { FETCH_EP_CHARS } from '../requests';

export const SingleEpisode: React.FC<RouteComponentProps<MatchParams>> = ({ match }) => {
  const { loading, data } = useQuery<EpResponse, SingleResponseVars>(FETCH_EP_CHARS, { variables: { id: parseInt(match.params.id) } })
  if (loading || !data || !data.episode) {
    return <div className="loader">Loading...</div>;
  }
  const episode = data.episode;
  const characters = episode.characters;

  return (
    // TO DO: vajag atsevišķā komponentē
    <div className="content-container">
      <div className="single-episode-card">
        <h1 className="card-title">{episode.name}</h1>
        <p className="ep-air-date">{episode.air_date}</p>
        <div className="episode-info">
          <EpisodeCard props={episode} />
        </div>
      </div>
      <h4 className="single-subtitle">All the characters that appeared on this episode:</h4>
      {/* TO DO: vajag atsevišķā komponentē */}
      <div className="char-cards-container">
        {characters.map((item: any, index: any) => (
          <Link to={'/characters/' + item.id} style={{ textDecoration: 'none' }}>
            <Card key={index} className="char-card z-depth-1" >
              <Card.Img
                variant="top"
                className="hvr-grow"
                src={item.image}
              />
              <Card.Body>
                <Card.Title
                  className={"card-title " + (item.name.length > 12 ? 'card-title-scroller' : '')}>
                  {item.name}
                </Card.Title>
              </Card.Body>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}