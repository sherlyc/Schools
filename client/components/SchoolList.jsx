import React from 'react'
import {Link} from 'react-router-dom'

export default (props) => {
  const schools = props.schools || []
  console.log(schools)
    return (
        <div className="school-list">
            <h2>List</h2>
            <ul>
              {schools.map((school, i) => {
                  return (<Link to={'/schools/'+school.id}><li key={i}>{school.name}</li></Link>)
              })}
            </ul>

        </div>
    )
}
