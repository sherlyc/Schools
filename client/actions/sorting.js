export const sortingByName = (sortField, sortOrder) => {
  return {
    type: "SORT_SCHOOLS",
    sortOrder,
    sortField
  };
};
