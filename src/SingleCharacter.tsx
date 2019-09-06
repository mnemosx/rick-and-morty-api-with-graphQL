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
  if (!data || !data.character) {
    return null;
  }
  const character = data.character;

  return (
    <div>
      <div>{match.params.id}</div>
      <div>{character.name}</div>
      <div>{character.status}</div>
    </div>
  )
}