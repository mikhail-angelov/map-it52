import { combineReducers } from 'redux'
import balloon from './balloon'
import markers from './markers'
import details from './details'

const reducers = combineReducers({
    markers,
    balloon,
    detailsInfo: details
})

export default reducers