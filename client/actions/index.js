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

export const throwError = (message) => {
  return {
    type: 'THROW_ERROR',
    message
  }
}

export const createSchool = (status) => {
    return {
        type: 'CREATE_SCHOOL',
        status
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

export const addSchool = (data) => {
    console.log(data)
    return (dispatch) => {
        request
        .post('/schools/add')
        .send(data)
        .end(function (err, res) {
            console.log(err)
            console.log(res)
            if (err) {
                dispatch(throwError(err.message))
            } else {
                dispatch(createSchool('200'))
            }
        })
    }
}
