import { connect } from 'react-redux'
import * as action from 'actions'
import Details from 'components/details'

const mapStateToProps = (state) => {
  return {
    details: state.detailsInfo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClose: () => dispatch(action.closeDetails())
  }
}

const DetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Details)

export default DetailsContainer
