import request from 'superagent'

export const receiveSchools = (schools) => {
    console.log("API CALLED")
    console.log(schools)
  return {
    type: 'RECEIVE_SCHOOLS',
    schoolsResults: schools.schools.map(school => school)
  }
}

export const fetchSchools = () => {
  return (dispatch) => {
    request
        .get('/schools')
        .end((err, res) => {
          if (err) {
              console.log(err)
            dispatch(searchError(err.message))
          } else {
            console.log("receiving result from api call")
            console.log(res)
            dispatch(receiveSchools(res.body))

          }
        })
  }
}
