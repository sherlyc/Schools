function sortBy(field, sortOrder) {
  if (sortOrder == "ASC") {
    return function(a, b) {
      if (a[field] < b[field]) return -1;
      if (a[field] > b[field]) return 1;
      return 0;
    };
  } else {
    return function(a, b) {
      if (a[field] > b[field]) return -1;
      if (a[field] < b[field]) return 1;
      return 0;
    };
  }
}

function schoolsResults(state = [], action) {
  console.log(action);
  switch (action.type) {
    case "RECEIVE_SCHOOLS":
      return [...action.schoolsResults];

    case "SORT_SCHOOLS": {
      return [...state.sort(sortBy(action.sortField, action.sortOrder))];
    }

    default:
      return state;
  }
}

export default schoolsResults;
