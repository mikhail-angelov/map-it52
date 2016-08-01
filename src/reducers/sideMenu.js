
const sideMenu = (state = { isOpen: false, term: null }, action) => {
    switch (action.type) {

    case 'TOGGLE_SIDEMENU':
      return {
          isOpen: !state.isOpen,
          term: null
      }
    case 'SEARCH':
      return {
          isOpen: state.isOpen,
          term: action.term
      }

    default:
      return state
    }
}

export default sideMenu
