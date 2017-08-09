function schoolsResults(state = [], action) {
  console.log("state");
  console.log(state["100"]);
  switch (action.type) {
    case "RECEIVE_SCHOOLS":
      return [...action.schoolsResults];

    case "SORT_SCHOOLS_NAME":
      return [
        ...state.sort((a, b) => {
          if (a.Name < b.Name) return -1;
          if (a.Name > b.Name) return 1;
          return 0;
        })
      ];

    default:
      return state;
  }
}

export default schoolsResults;
