
const loadData = (state = {}, action) => {
  switch (action.type) {
    case 'LOAD':
      return {
        data: action.data
      }
    default:
      return state
  }
}

export default loadData
