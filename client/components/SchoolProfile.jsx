import React from 'react'
import GMap from './GMap'
import { connect } from 'react-redux'
import { deleteSchool } from '../actions'
import { Link } from 'react-router-dom'



let SchoolProfile = (props) => {
    const school = props.school || {}

    return (
         <div className='school'>
            <div>
                <h1>School Profile</h1>
                    <ul>
                        <li>Name : { school.name }</li>
                        <li>School Type : { school.schoolType }</li>
                        <li>Authority : { school.authority }</li>
                        <li>Gender : { school.gender }</li>
                        <li>Decile : { school.decile }</li>
                        <li>Address : { school.address }</li>
                        <li>Suburb : { school.suburb }</li>
                        <li>Email : { school.email }</li>
                        <li>Website : <a href={ school.url }>{ school.url }</a></li>

                    </ul>
                    <div className='actions'>
                      <Link to={'/schools/edit/' + school.id}>Edit This</Link>
                      <i className="fa fa-trash-o" aria-hidden="true"  onClick={() => props.dispatch(deleteSchool(school.id))}></i>
                    </div>
            </div>
            <div className='map'>
                <GMap center={ { lat: school.latitude, lng: school.longitude } }/>
            </div>
        </div>
    )
}

SchoolProfile = connect()(SchoolProfile)

export default SchoolProfile
