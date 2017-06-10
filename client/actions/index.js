import request from 'superagent'

export const receiveSchools = (schools) => {
  return {
    type: 'RECEIVE_SCHOOLS',
    schoolsResults: schools.schools.map(school => school)
  }
}

export const receiveSchool = (school) => {
    return {
        type: 'RECEIVE_SCHOOL',
        school: {...school}
    }
}

const throwError = (message) => {
  return {
    type: 'THROW_ERROR',
    message
  }
}


export const fetchSchools = () => {
  return (dispatch) => {
    request
        .get('/schools')
        .end((err, res) => {
          if (err) {
            dispatch(throwError(err.message))
          } else {
            dispatch(receiveSchools(res.body))
          }
        })
  }
}

export const getSchool = (id) => {
    return (dispatch) => {
        request
        .get('/schools/' + id)
        .end(function (err, res) {
            if (err) {
                dipatch(throwError(err.message))
            } else {
                dispatch(receiveSchool(res.body.school))
            }
        })
    }

}
