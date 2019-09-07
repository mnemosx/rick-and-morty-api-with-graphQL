import React from 'react'
import { RouteComponentProps } from "react-router-dom";
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const FETCH_SINGLE_CHAR = gql`
query fetchCharacters($id: ID) {
  character(id: $id) {
    id
    name
    image
    status
    species
    gender
    origin {
      name
      type
      dimension
      created
    }
  }
}
`;

interface MatchParams {
  id: string;
}
interface Response {
  character: Character;
}
interface Character {
  id: number,
  name: string,
  image: string,
  status: string,
  species: string,
  gender: string,
  origin: Location,

}
interface Location {
  name: string
  type: string
  dimension: string
  created: string
}
interface CharacterVars {
  id: number
}

export const SingleCharacter: React.FC<RouteComponentProps<MatchParams>> = ({ match }) => {
  const { loading, data } = useQuery<Response, CharacterVars>(FETCH_SINGLE_CHAR, { variables: { id: parseInt(match.params.id) } })
  if (loading || !data || !data.character) {
    return <div className="loader">Loading...</div>;
  }
  const character = data.character;

  return (
    <div>
      <div className="char-info content-container">
        <div>{match.params.id}</div>
        <div>{character.name}</div>
        <div>{character.status}</div>
      </div>
      <div className="char-seen content-container">
        <h2 className="single-char-slider-title">Episodes</h2>
        <p className="single-char-slider-subtext">{character.name} has appeared on these episodes</p>
      </div>
      <div className="char-seen-cards">
        episode cards go here
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