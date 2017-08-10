export const sortBy = (field, sortOrder) => {
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
};

export const filterBy = field => {
  return function() {};
};
