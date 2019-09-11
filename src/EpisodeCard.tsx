import React from 'react'
import { Episode } from './interfaces'

export const EpisodeCard: React.FC<{ props: Episode }> = ({ props }) => {
  return (
    <div className="episode-info">
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