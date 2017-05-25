import React from 'react'
import * as api from '../api'
import Nav from './Nav'
import Home from './Home'
import Schools from './Schools'
import List from './List'
import {HashRouter as Router, Route} from 'react-router-dom'


export default class App extends React.Component {


render () {
    return (
        <Router>
            <div>
                <h1>Welcome to Schools</h1>
                <hr></hr>
                  <div className='container'>
                    <div className='nav'>
                     <Nav />
                    </div>
                    <hr></hr>
                    <div className='content'>
                        <Route exact={true} path='/' component={Home}/>
                        <Route exact={true} path='/schools' component={Schools} />


                    </div>
                  </div>
              </div>
        </Router>
    )
}
}
