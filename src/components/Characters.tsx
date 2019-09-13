import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import { AllResponseVars, CharacterData, Character } from '../interfaces'
import { FETCH_CHARS } from '../requests';
import { CallWaypoint } from './Waypoint';
import { CharCard } from './CharCard';
import { Carousel } from './Carousel';



export const Main: React.FC = () => {
  const { loading, data, fetchMore } = useQuery<CharacterData, AllResponseVars>(FETCH_CHARS, { variables: { page: 1 } })
  const characters = loading || !data ? [] : data.characters.results;
  if (loading || !data) {
    return <div className="loader">Loading...</div>;
  }

  // For infinite scroll
  const scrollEnd = () => fetchMore({
    variables: {
      page: characters.length / 20 + 1
    },
    updateQuery: (prev, { fetchMoreResult }) => {
      if (!fetchMoreResult) return prev;
      return {
        characters: {
          __typename: 'Characters',
          results: [
            ...prev.characters.results,
            ...fetchMoreResult.characters.results
          ]
        }
      }
    }
  })

  return (
    <div>
      <Carousel />
      <div className="char-cards-container">
        {characters.map((item: Character, index: number) => (
          <Link to={'/characters/' + item.id} style={{ textDecoration: 'none' }} key={index}>
            <CharCard props={item} />
            <CallWaypoint indexProp={index} charactersProp={characters} fnProps={scrollEnd} />
          </Link>
        ))}
      </div>
    </div>

  )
}