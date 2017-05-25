import React from 'react'

export default (props) => {
  const school = props.school || []
    return (
        <div className="school-detail">
            <h2>List</h2>
            <ul>
              {school.map((school, i) => {
                  return (<li key={i}>{school.name}</li>)
              })}
            </ul>

        </div>
    )
}
