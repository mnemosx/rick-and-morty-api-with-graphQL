import React from 'react'
import { RouteComponentProps, Link } from "react-router-dom";
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { MatchParams, CharResponse, CharacterVars } from './interfaces'

const FETCH_SINGLE_CHAR = gql`
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

// interface MatchParams {
//   id: string;
// }
// interface Response {
//   character: Character;
// }
// interface Character {
//   id: number,
//   name: string,
//   image: string,
//   status: string,
//   species: string,
//   type: string;
//   gender: string,
//   location: Location,
//   origin: Location,
//   episode: Episode[],
// }
// interface Location {
//   name: string
// }
// interface Episode {
//   name: string
//   episode: string
// }
// interface CharacterVars {
//   id: number
// }

export const SingleCharacter: React.FC<RouteComponentProps<MatchParams>> = ({ match }) => {
  const { loading, data } = useQuery<CharResponse, CharacterVars>(FETCH_SINGLE_CHAR, { variables: { id: parseInt(match.params.id) } })
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
        {episode.map((item: any, index: any) => (
          <Link to={'/episodes/' + item.id} style={{ textDecoration: 'none' }} key={index}>
            <div className="seen-episode-info episode-info hvr-grow">
              <div>
                <h4>
                  Episode
                </h4>
                <p>
                  {item.episode}
                </p>
              </div>
              <div>
                <h4>
                  Name
                </h4>
                <p>
                  {item.name}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="char-seen content-container">
        <h2 className="single-char-slider-title">Planets</h2>
        <p className="single-char-slider-subtext">{character.name} has been on these planets</p>
      </div>
      <div className="char-seen-cards">
        planet cards go here
      </div>
    </div>
  )
}