
export const showBalloon = (marker) => {
  return {
    type: 'SHOW_BALLOON',
    marker
  }
}

export const closeBalloon = () => {
  return {
    type: 'CLOSE_BALLOON'
  }
}

export const showDetails = (marker) => {
  return {
    type: 'SHOW_DETAILS',
    marker
  }
}

export const closeDetails = () => {
  return {
    type: 'CLOSE_DETAILS'
  }
}

