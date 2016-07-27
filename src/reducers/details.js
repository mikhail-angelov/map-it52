const balloon = (state = null, action) => {
  switch (action.type) {
    case 'SHOW_DETAILS':
      return  action.marker

    case 'CLOSE_DETAILS':
      return null

    default:
      return state
  }
}

export default balloon