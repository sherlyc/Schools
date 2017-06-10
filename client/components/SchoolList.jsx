import React from 'react'
import {Link} from 'react-router-dom'

export default (props) => {

  const schools = props.schools || []
    return (
        <div className="school-list">
            <h2>List</h2>
            <ul>
              {schools.map((school, i) => {
                  return (<Link key={i} to={'/schools/'+school.id}><li>{school.name}</li></Link>)
              })}
            </ul>

        </div>
    )
}
