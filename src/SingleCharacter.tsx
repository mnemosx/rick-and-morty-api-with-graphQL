import React from 'react'
import { RouteComponentProps, Link } from "react-router-dom";
import { useQuery } from '@apollo/react-hooks';
import { MatchParams, CharResponse, SingleResponseVars, Episode } from './interfaces'
import { FETCH_SINGLE_CHAR } from './requests';
import { EpisodeCard } from './EpisodeCard';

export const SingleCharacter: React.FC<RouteComponentProps<MatchParams>> = ({ match }) => {
  const { loading, data } = useQuery<CharResponse, SingleResponseVars>(FETCH_SINGLE_CHAR, { variables: { id: parseInt(match.params.id) } })
  if (loading || !data || !data.character) {
    return <div className="loader">Loading...</div>;
  }
  const character = data.character;
  const episode = character.episode;

  return (
    <div>
      <div className="content-container">
        <h1 className="char-info-title">{character.name}</h1>
        <div className="char-info">
          <img src={character.image} alt="Character avatar" className="char-info-avatar" />
          <div className="char-info-flex-container">
            <div className="char-info-flex">
              <div className="char-info-row">
                <div className="char-info-col-title">Status</div>
                <div className="char-info-col">{character.status}</div>
              </div>
              <div className="char-info-row">
                <div className="char-info-col-title">Species</div>
                <div className="char-info-col">{character.species}</div>
              </div>
              <div className="char-info-row">
                <div className="char-info-col-title">Type</div>
                <div className="char-info-col">{(data.character.type ? character.type : 'No type')}</div>
              </div>
            </div>
            <div className="char-info-flex">
              <div className="char-info-row">
                <div className="char-info-col-title">Gender</div>
                <div className="char-info-col">{character.gender}</div>
              </div>
              <div className="char-info-row">
                <div className="char-info-col-title">Location</div>
                <div className="char-info-col">{character.location.name}</div>
              </div>
              <div className="char-info-row">
                <div className="char-info-col-title">Origin</div>
                <div className="char-info-col">{character.origin.name}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="char-seen content-container">
        <h2 className="single-char-slider-title">Episodes</h2>
        <p className="single-char-slider-subtext">{character.name} has appeared on these episodes</p>
      </div>
      <div className="char-seen-cards-container">
        {episode.map((item: Episode, index: number) => (
          <Link to={'/episodes/' + item.id} style={{ textDecoration: 'none' }} key={index}>
            <EpisodeCard className="seen-episode-info hvr-grow" props={item} />
          </Link>
        ))}
      </div>
    </div>
  )
}