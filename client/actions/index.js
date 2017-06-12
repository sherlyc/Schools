import request from 'superagent'
import { createHashHistory } from 'history'
const history = createHashHistory()

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

export const clearError = () => {
    return {
      type: 'CLEAR_ERROR'
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

export const getSchool = (id) => {  //call api to get single school
    return (dispatch) => {
        request
        .get('/schools/' + id)
        .end(function (err, res) {
            if (err) {
                dispatch(throwError(err.message))
            } else {
                dispatch(receiveSchool(res.body.school))

            }
        })
    }
}

export const addSchool = (data) => { // call api to create school
    return (dispatch) => {
        request
        .post('/schools/add')
        .send(data)
        .end(function (err, res) {
            if (err) {
                dispatch(throwError(err.message))
            } else {
                dispatch(clearError())
                setTimeout(() => history.push('/schools'), 1200 )
            }
        })
    }
}

export const updateSchool = (id, data) => { // call api to save school
    return (dispatch) => {
        request
        .put('/schools/edit/' + id)
        .send(data)
        .end(function (err, res) {
            if (err) {
                dispatch(throwError(err.message)) // dispatch error message
            } else {
                dispatch(clearError())
                setTimeout(() => history.push('/schools'), 1200 )
            }
        })
    }
}
