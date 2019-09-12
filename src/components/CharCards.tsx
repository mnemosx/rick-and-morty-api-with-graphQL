import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import React from 'react'

export function CharCards(characters: []) {

  return (
    // viss atkārtojas ar characters home lapā
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
  )
}