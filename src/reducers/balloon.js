const balloon = (state = null, action) => {
  switch (action.type) {
    case 'SHOW_BALLOON':
      return  action.marker

    case 'CLOSE_BALLOON':
      return null

    default:
      return state
  }
}

export default balloon