module.exports = {
  getSchools,
  getSchool,
  addSchool,
  updateSchool,
  delSchool,
  transactUpdate
};

function getSchools(db) {
  return db("schools").select();
}

function getSchool(id, db) {
  return (
    db("schools")
      // .join('profiles', 'schools.id', '=' , 'profiles.school_id')
      // .join('locations', 'schools.id', '=', 'locations.school_id')
      .where("ID", id)
      .first()
  );
}

function addSchool(data, db) {
  return db("schools").insert({
    Name: data.Name,
    School_Type: data.School_Type,
    Authority: data.Authority,
    Gender: data.Gender,
    Decile: data.Decile
  });
}

function updateSchool(id, data, db) {
  return db("schools")
    .where("id", id)
    .update({
      name: data.name,
      schoolType: data.schoolType,
      authority: data.authority,
      decile: data.decile
    })
    .then(result => {
      return db("profiles")
        .where("school_id", id)
        .update({ address: data.address, email: data.email, url: data.url });
    })
    .then(result => {
      return db("locations").where("school_id", id).update({
        suburb: data.suburb,
        latitude: data.latitude,
        longitude: data.longitude
      });
    });
}

function transactUpdate(id, data, db) {
  // writing updateSchool in db transaction way
  return db.transaction(function(t) {
    return db("schools")
      .transacting(t)
      .where("id", id)
      .update({
        name: data.name,
        schoolType: data.schoolType,
        authority: data.authority,
        decile: data.decile
      })
      .then(function() {
        return db("profiles")
          .transacting(t)
          .where("school_id", id)
          .update({ address: data.address, email: data.email, url: data.url });
      })
      .then(function() {
        return db("locations").transacting(t).where("school_id", id).update({
          suburb: data.suburb,
          latitude: data.latitude,
          longitude: data.longitude
        });
      })
      .then(t.commit)
      .catch(function(e) {
        t.rollback();
        throw e;
      });
  });
}

function delSchool(id, db) {
  return db("schools").where("id", id).del();
}
