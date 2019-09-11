import React from 'react'
import { Card } from 'react-bootstrap'
import { useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost";
import { Link } from 'react-router-dom';
import { Waypoint } from 'react-waypoint';

const FETCH_CHARS = gql`
  query fetchCharacters($page: Int!) {
    characters(page: $page) {
      results {
        id
        name
        image
      }
    }
  }
`;

// varētu auto ģenerēt interfeisus pēc fetch shēmas
// nez kāpēc updateQuery neiet ar importētiem interfeisiem
interface CharacterData {
  characters: Characters
}
interface Characters {
  results: Character[]
}
interface Character {
  id: number,
  name: string,
  image: string,
}
interface CharactersVars {
  page: number
}

export const Main: React.FC = () => {
  // const [page, setPage] = useState<number>(1)
  const { loading, data, fetchMore } = useQuery<CharacterData, CharactersVars>(FETCH_CHARS, { variables: { page: 1 } })
  const characters = loading || !data ? [] : data.characters.results;
  if (loading || !data) {
    return <div className="loader">Loading...</div>;
  }

  const scrollEnd = () => fetchMore({
    variables: {
      page: characters.length / 20 + 1
    },
    updateQuery: (prev, { fetchMoreResult }) => {
      if (!fetchMoreResult) return prev;
      // setPage(page + 1)
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
          {index === characters.length - 3 && (
            <Waypoint onEnter={() => { scrollEnd() }}>
            </Waypoint>
          )}
        </Link>
      ))}
    </div>
  )
}