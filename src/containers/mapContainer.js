import { connect } from 'react-redux'
import * as action from '../actions'
import Map from '../components/map'

const mapStateToProps = (state) => {
  return {
    default: {
      center: { lat: 56.295274, lng: 43.956947 },
      zoom: 13
    },
    markers: state.markers,
    balloon: state.balloon,
    changeCenter: (state.detailsInfo && state.detailsInfo.marker)?state.detailsInfo.marker:null
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onShowBalloon: (maker) => {
      dispatch(action.showBalloon(maker))
    },
    onCloseBalloon: () => dispatch(action.closeBalloon()),
    onShowDetails: (maker) => {
      dispatch(action.fetchDetailInfoIfNeeded(maker))
      dispatch(action.showDetails(maker))
    },
    onCloseDetails: () => dispatch(action.closeDetails())
  }
}

const MapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Map)

export default MapContainer