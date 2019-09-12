import React from 'react'
import { Episode } from './interfaces'

type CardProps = {
  className?: string,
  props: Episode,
}

export const EpisodeCard: React.FC<CardProps> = ({ className = '', props }) => {
  return (
    <div className={`episode-info ${className}`}>
      <div>
        <h4>
          Name
        </h4>
        <p>
          {props.name}
        </p>
      </div>
      <div>
        <h4>
          Episode
        </h4>
        <p>
          {props.episode}
        </p>
      </div>
    </div>
  )
}