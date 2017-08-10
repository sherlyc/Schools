export const sorting = (sortField, sortOrder) => {
  return {
    type: "SORT_SCHOOLS",
    sortField,
    sortOrder
  };
};

export const filtering = filter => {
  console.log("filtering");
  console.log(filter);
  return {
    type: "FILTER_SCHOOLS",
    filter
  };
};
