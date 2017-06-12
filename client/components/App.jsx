import React from 'react'
import Nav from './Nav'
import Home from './Home'
import SchoolsContainer from '../containers/SchoolsContainer'
import AddSchoolForm from './AddSchoolForm'
import EditSchoolForm from './EditSchoolForm'
import SimpleForm from './SimpleForm'
import ProfileContainer from '../containers/ProfileContainer'
import { HashRouter as Router, Route } from 'react-router-dom'


export default class App extends React.Component {


render () {
    return (
        <Router>
            <div>
                <h1>Welcome to Schools</h1>
                  <div className='container'>
                     <Nav />
                    <div className='content'>
                        <Route exact={true} path='/' component={ Home }/>
                        <Route exact={true} path='/schools' component={ SchoolsContainer } />
                        <Route exact={true} path='/add' component={ AddSchoolForm } />
                        <Route exact={true} path='/schools/:id' component={ ProfileContainer } />
                        <Route exact={true} path='/schools/edit/:id' component={ EditSchoolForm } />
                        <Route exact={true} path='/simple' component={ SimpleForm } />

                    </div>
                  </div>
              </div>
        </Router>
    )
}
}
