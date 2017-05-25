import React from 'react'
import * as api from '../api'
import SchoolDetail from './SchoolDetail'

export default class SchoolProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            school: []
        }
    }


componentDidMount () {
   api.getSchoolProfile((err, school) => this.renderProfile(err, school))
}

renderProfile (err, school) {
    this.setState({
        error: err,
        school: school || []
    })
}

render () {
    return (
            <div>

                      <SchoolDetail schools={this.state.school}/>
            </div>
    )
}
}
