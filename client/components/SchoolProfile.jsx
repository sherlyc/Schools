import React from 'react'
import * as api from '../api'

export default class SchoolProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            school: {},
            id: props.match.params.id
        }
    }

componentDidMount () {
   api.getSchool(this.state.id,(err, school) => this.renderProfile(err, school))
}

renderProfile (err, school) {
    this.setState({
        error: err,
        school: school || {}
    })
}

render () {
    return (
            <div>
                <h1>School Profile</h1>
                    <ul>
                        <li>Name : {this.state.school.name}</li>
                        <li>Suburb : {this.state.school.suburb}</li>
                        <li>Email : {this.state.school.email} </li>
                    </ul>
            </div>
    )
}
}
