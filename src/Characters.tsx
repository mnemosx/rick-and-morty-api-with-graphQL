import React from 'react'
import { Card, Container, Row } from 'react-bootstrap'
import { useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost";
import { Link } from 'react-router-dom';

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
  species: string
}
interface CharactersVars {
  page: number
}



export const Main: React.FC = () => {
  const { loading, data } = useQuery<CharacterData, CharactersVars>(FETCH_CHARS, { variables: { page: 15 } })
  const characters = loading || !data ? [] : data.characters.results

  // Function applies scroll on hover only to long overflowing titles
  setTimeout(() => {
    const titles = document.getElementsByClassName('card-title') as HTMLCollectionOf<Element>
    console.log(titles)
    let title
    for (let i = 0; i < titles.length; i++) {
      title = titles[i].innerHTML
      // Obviously, comparing to fixed number of characters
      //  in string sucks. Should find another way.
      if (title.length > 12) {
        titles[i].className += ' card-title-scroller'
      }
    }
  }, 3000);

  return (
    <Container>
      <Row style={{ justifyContent: "center" }}>
        {characters.map((item: any, index: any) => (
          <Link to={'/characters/' + item.id} style={{ textDecoration: 'none' }}>
            <Card key={index} className="char-card" >
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title className="card-title">{item.name}</Card.Title>
              </Card.Body>
            </Card>
          </Link>

        ))}
      </Row>
    </Container>
  )
}