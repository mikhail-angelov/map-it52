import _ from 'lodash'
//todo: temp solution
import employers from '../assets/employers.json'

function filter(term) {
  console.log(term)
  const sorted = _.orderBy(employers,['name'])
  if (term) {
    return _.filter(sorted, marker => (marker.name.toLowerCase().indexOf(term.toLowerCase()) >= 0))
  } else {
    return sorted
  }
}
const markers = (state = filter(), action) => {
  switch (action.type) {
    case 'SEARCH':
      return filter(action.term)
    case 'TOGGLE_SIDEMENU':
      return filter(null)
    default:
      return state
  }
}

export default markers