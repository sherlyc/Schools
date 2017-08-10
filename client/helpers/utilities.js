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

export const search = name => {
  console.log(name);
  if (name != "") {
    console.log(name);
    let schoolName = name.toLowerCase();
    console.log(schoolName);
    return school => school.Name.toLowerCase().search(schoolName) == 0;
  }
};

export const filterBy = field => {
  if (field.city != "" && field.type != "") {
    return school =>
      school.City == field.city && school.School_Type == field.type;
  } else if (field.city) {
    return school => school.City == field.city;
  } else if (field.type) {
    return school => school.School_Type == field.type;
  }
};
