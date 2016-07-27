import React from 'react'
import DetailsContainer from '../../containers/detailsContainer'
import MapContainer from '../../containers/mapContainer'

const App = () => (
  <div style={{
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
    <DetailsContainer />
    <MapContainer />
  </div>
)

export default App