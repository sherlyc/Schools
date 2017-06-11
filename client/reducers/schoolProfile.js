
function schoolProfile (state = {}, action) {
  switch (action.type) {
    case 'RECEIVE_SCHOOL':
      return {...action.school}

    default:
      return state
  }
}

export default schoolProfile
