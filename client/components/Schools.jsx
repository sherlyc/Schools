import React from 'react'
import * as api from '../api'
import SchoolList from './SchoolList'

export default class Schools extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            schools: []
        }
    }


componentDidMount () {
   api.getSchools((err, schools) => this.renderSchools(err, schools))
}

renderSchools (err, schools) {
    this.setState({
        error: err,
        schools: schools || []
    })
}

render () {
    return (
            <div>

                      <SchoolList schools={this.state.schools}/>
            </div>
    )
}
}
