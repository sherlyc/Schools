import React from 'react'
import {connect} from 'react-redux'
import SchoolList from '../components/SchoolList'
import {fetchSchools} from '../actions'

class SchoolsContainer extends React.Component {

    componentDidMount () {
        this.props.dispatch(fetchSchools())
    }


    render () {
        return (
            <SchoolList  schools={this.props.schoolsResults}/>
        )
    }
}

function mapStateToProps (state) {
    return {
        schoolsResults : state.schoolsResults
    }
}

SchoolsContainer = connect(mapStateToProps)(SchoolsContainer)
export default SchoolsContainer
