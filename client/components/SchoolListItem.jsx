import React from 'react'

export default ({school}) => {
    return (
        <div className="school-list-item">
            {`${school.name}`}
        </div>
    )
}
