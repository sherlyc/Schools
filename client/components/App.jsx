import React from 'react'
import * as api from '../api'
import SchoolList from './SchoolList'
// import {HashRouter as Router, Route} from 'react-router-dom'

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <h1>Welcome to Schools</h1>
//         <hr></hr>
//           <div className='container'>
//             <div className='nav'>
//               Navigation menu goes here
//             </div>
//             <hr></hr>
//             <div className='content'>
//               <Route exact={true} path='/' component={List}/>
//             </div>
//           </div>
//       </div>
//     </Router>
//
//   )
// }
//
// export default App

export default class App extends React.Component {
    constructor(props) {
        super(props)
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

// refreshList (err) {
//     this.setState({
//         error: err,
//         addSchoolVisible: false
//     })
//     api.getSchools(this.renderSchools.bind(this))
// }

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
