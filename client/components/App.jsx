import React from 'react'
import List from './List'
import {HashRouter as Router, Route} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div>
        <h1>Welcome to Schools</h1>
        <hr></hr>
          <div className='container'>
            <div className='nav'>
              Navigation menu goes here
            </div>
            <hr></hr>
            <div className='content'>
              <Route exact={true} path='/' component={List}/>
            </div>
          </div>
      </div>
    </Router>

  )
}

export default App
