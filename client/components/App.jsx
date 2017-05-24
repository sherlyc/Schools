import React from 'react'
import * as api from '../api'
import SchoolList from './SchoolList'
// import {HashRouter as Router, Route} from 'react-router-dom'


export default class App extends React.Component {
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
                <h1>Welcome to Schools</h1>
                <hr></hr>
                  <div className='container'>
                    <div className='nav'>
                      Navigation menu goes here
                    </div>
                    <hr></hr>
                    <div className='content'>
                      <SchoolList schools={this.state.schools}/>
                    </div>
                  </div>
              </div>
    )
}
}
