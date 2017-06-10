import React from 'react'
import {connect} from 'react-redux'
import {fetchSchools} from '../actions'
import * as api from '../api'
import SchoolList from './SchoolList'

class Schools extends React.Component {
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

    handleClick () {
        this.props.dispatch(fetchSchools())

    }

    componentWillReceiveProps (props) {
        console.log(props)


    }
    render () {
        return (
            <div>
                <button onClick={this.handleClick.bind(this)}>Go</button>
            </div>
        )
    }
}

function mapStateToProps (state) {
  return {
    schoolsResults: state.schoolsResults
  }
}

Schools = connect(mapStateToProps)(Schools)

export default Schools
