import { connect } from 'react-redux'
import * as action from '../actions'
import SideMenu from '../components/sideMenu'

const mapStateToProps = (state) => {
  return {
    isOpen: state.sideMenu.isOpen,
    term: state.sideMenu.term,
    results: state.markers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onToggle: ()=>dispatch(action.toggleSideMenu()),
    onSearch: (term)=>dispatch(action.search(term)),
    onSelect: (maker) => {
      dispatch(action.centralMap(maker))
      dispatch(action.fetchDetailInfoIfNeeded(maker))
      dispatch(action.showDetails(maker))
    }
  }
}

const SideMenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SideMenu)

export default SideMenuContainer