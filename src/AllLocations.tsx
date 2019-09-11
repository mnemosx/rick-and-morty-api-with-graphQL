import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost";
import { LocationData, LocationVars } from './interfaces'


const FETCH_LOCATIONS = gql`
  query fetchLocations($page: Int!) {
      locations(page: $page) {
        results {
          id
          name
          type
          dimension
        }
      }
  }
`;

// interface LocationData {
//   locations: Locations
// }
// interface Locations {
//   results: Location[]
// }
// interface Location {
//   name: string,
//   type: string,
//   dimension: string,
// }
// interface LocationVars {
//   page: number
// }

export const AllLocations: React.FC = () => {
  const { loading, data } = useQuery<LocationData, LocationVars>(FETCH_LOCATIONS, { variables: { page: 1 } })
  const locations = loading || !data ? [] : data.locations.results;
  if (loading || !data) {
    return <div className="loader">Loading...</div>;
  }

  return (
    <div className="content-container">
      {locations.map((item: any, index: any) => (
        <div className="location-card">
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
        </div>
      ))}
    </div>
  )
}