import React from 'react'
import { Character } from '../interfaces'
import { Card } from 'react-bootstrap'

type CharCardProps = {
  props: Character,
}

export const CharCard: React.FC<CharCardProps> = ({ props }) => {
  return (
    <Card className="char-card z-depth-1" >
      <Card.Img
        variant="top"
        className="hvr-grow"
        src={props.image}
      />
      <Card.Body>
        <Card.Title
          className={"card-title " + (props.name.length > 12 ? 'card-title-scroller' : '')}>
          {props.name}
        </Card.Title>
      </Card.Body>
    </Card>
  )
}