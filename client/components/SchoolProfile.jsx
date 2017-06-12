import React from 'react'
import GMap from './GMap'
import {Link} from 'react-router-dom'

export default (props) => {
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
                    <Link to={'/schools/edit/' + school.id}>Edit This Listing</Link>
            </div>
            <div className='map'>
                <GMap center={ { lat: school.latitude, lng: school.longitude } }/>
            </div>
        </div>
    )
}
