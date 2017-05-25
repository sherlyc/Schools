import React from 'react'
import * as api from '../api'
import SchoolDetail from './SchoolDetail'

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
                      <SchoolDetail school={this.state.school}/>
            </div>
    )
}
}
