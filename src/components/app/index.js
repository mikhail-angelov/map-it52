import React from 'react'
import DetailsContainer from '../../containers/detailsContainer'
import MapContainer from '../../containers/mapContainer'
import SideMenuContainer from '../../containers/sideMenuContainer'

const App = () => (
  <div style={{
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center'
  }}>
    <DetailsContainer />
    <MapContainer />
    <SideMenuContainer />
  </div>
)

export default App