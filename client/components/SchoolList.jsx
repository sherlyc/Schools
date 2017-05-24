import React from 'react'

export default (props) => {
  const schools = props.schools || []
    return (
        <div className="school-list">
            <h2>List</h2>
            <ul>
              {schools.map((school, i) => {
                  return (<li key={i}>{school.name}</li>)
              })}
            </ul>

        </div>
    )
}
