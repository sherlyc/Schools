import { sortBy, filterBy, search } from "../helpers/utilities";

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
      return {
        ...state,
        schoolsResults: [
          ...state.schoolsResults.sort(
            sortBy(action.sortField, action.sortOrder)
          )
        ]
      };
    }
    case "SEARCH_SCHOOLS": {
      if (action.search != "") {
        return {
          ...state,
          schoolsResults: [
            ...state.originalResults.filter(search(action.search))
          ]
        };
      } else {
        return {
          ...state,
          schoolsResults: [...state.originalResults]
        };
      }
    }
    case "FILTER_SCHOOLS": {
      return {
        ...state,
        schoolsResults: [
          ...state.originalResults.filter(filterBy(action.filter))
        ]
      };
    }

    default:
      return state;
  }
}

export default schoolsResults;
