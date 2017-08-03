function schoolsResults(state = [], action) {
  switch (action.type) {
    case "RECEIVE_SCHOOLS":
      return [...action.schoolsResults];

    default:
      return state;
  }
}

export default schoolsResults;
