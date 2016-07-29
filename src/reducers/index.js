import { combineReducers } from 'redux'
import balloon from './balloon'
import markers from './markers'
import details from './details'
import sideMenu from './sideMenu'

const reducers = combineReducers({
    markers,
    balloon,
    detailsInfo: details,
    sideMenu
})

export default reducers