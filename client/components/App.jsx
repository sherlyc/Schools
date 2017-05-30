import React from 'react'
import * as api from '../api'
import Nav from './Nav'
import Home from './Home'
import Schools from './Schools'
import AddSchoolForm from './AddSchoolForm'
import SchoolProfile from './SchoolProfile'
import Form from './Form'
import {HashRouter as Router, Route} from 'react-router-dom'


export default class App extends React.Component {


render () {
    return (
        <Router>
            <div>
                <h1>Welcome to Schools</h1>
                  <div className='container'>
                    <div className='nav'>
                     <Nav />
                    </div>
                    <hr></hr>
                    <div className='content'>
                        <Route exact={true} path='/' component={Home}/>
                        <Route exact={true} path='/schools' component={Schools} />
                        <Route exact={true} path='/add' component={AddSchoolForm} />
                        <Route exact={true} path='/schools/:id' component={SchoolProfile} />
                        <Route exact={true} path='/form' component={Form} />
                    </div>
                  </div>
              </div>
        </Router>
    )
}
}
