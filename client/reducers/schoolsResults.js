import { sortBy, filterBy } from "../helpers/utilities";

function schoolsResults(
  state = {
    originalResults: [],
    schoolsResults: []
  },
  action
) {
  switch (action.type) {
    case "RECEIVE_SCHOOLS":
      return {
        ...state,
        originalResults: [...action.schoolsResults],
        schoolsResults: [...action.schoolsResults]
      };

    case "SORT_SCHOOLS": {
      console.log(action);
      return {
        ...state,
        schoolsResults: [
          ...state.originalResults.sort(
            sortBy(action.sortField, action.sortOrder)
          )
        ]
      };
    }

    case "FILTER_SCHOOLS": {
      return {
        ...state,
        schoolsResults: [
          ...state.originalResults.filter(
            school => school.City == action.filter.city
          )
        ]
      };
    }

    default:
      return state;
  }
}

export default schoolsResults;
