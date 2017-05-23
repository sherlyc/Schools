import React from 'react'
import SchoolListItem from './SchoolListItem'

export default (props) => {
    return (
        <div className="school-list">
            <h2>List</h2>
            {props.schools.map((school) => {
                return <SchoolListItem
                    key={school.id}
                    school={school} />
            })}
        </div>
    )
}
