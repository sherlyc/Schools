import React from 'react'

export default (props) => {
  const school = props.school || []
    return (
        <div className="school-detail">
            <h2>List</h2>
            <ul>
              {Object.keys(props.school).map((key, i) => {
                  return (<li key={i}>{school[key]}</li>)
              })}
            </ul>

        </div>
    )
}
