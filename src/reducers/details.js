function getInfo(state = {
  isFetching: false,
  didInvalidate: false,
  data: {}
}, action) {
  switch (action.type) {
    case 'INVALIDATE_DETAIL_INFO':
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case 'REQUEST_DETAIL_INFO':
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case 'RECEIVE_DETAIL_INFO':
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        data: action.info
      })
    default:
      return state
  }
}

const details = (state = {marker:null, info: null}, action) => {
  switch (action.type) {
    case 'SHOW_DETAILS':
    case 'REQUEST_DETAIL_INFO':
    case 'RECEIVE_DETAIL_INFO':
      return Object.assign({}, state, {
        marker: action.marker,
        info: getInfo(state.info, action)
      })
    case 'CLOSE_DETAILS':
      return {marker:null, info: null}

    default:
      return state
  }
}

export default details