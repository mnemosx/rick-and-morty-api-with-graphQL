import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { LocationData, Location, AllResponseVars } from '../interfaces'
import { FETCH_LOCATIONS } from '../requests';
import { CallWaypoint } from './Waypoint';

export const AllLocations: React.FC = () => {
  const { loading, data, fetchMore } = useQuery<LocationData, AllResponseVars>(FETCH_LOCATIONS, { variables: { page: 1 } })
  const locations = loading || !data ? [] : data.locations.results;
  if (loading || !data) {
    return <div className="loader">Loading...</div>;
  }

  const scrollEnd = () => fetchMore({
    variables: {
      page: locations.length / 20 + 1
    },
    updateQuery: (prev, { fetchMoreResult }) => {
      if (!fetchMoreResult) return prev;
      return {
        locations: {
          __typename: 'Locations',
          results: [
            ...prev.locations.results,
            ...fetchMoreResult.locations.results
          ]
        }
      }
    }
  })

  return (
    <div className="content-container">
      {locations.map((item: Location, index: number) => (
        <div className="location-card" key={index}>
          <h1 className="card-title">{item.name}</h1>
          <div className="location-info hvr-grow">
            <div>
              <h4>
                Type
              </h4>
              <p>
                {item.type}
              </p>
            </div>
            <div>
              <h4>
                Dimension
              </h4>
              <p>
                {item.dimension}
              </p>
            </div>
            <div>
              <h4>
                Id
              </h4>
              <p>
                {item.id}
              </p>
            </div>
          </div>
          <CallWaypoint indexProp={index} charactersProp={locations} fnProps={scrollEnd} />
        </div>
      ))}
    </div>
  )
}