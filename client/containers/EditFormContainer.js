import React from 'react'
import {connect} from 'react-redux'
import EditSchoolForm from '../components/EditSchoolForm'
import {getSchool} from '../actions'

class EditFormContainer extends React.Component {

    componentDidMount () {
        this.props.dispatch(getSchool(this.props.match.params.id))
    }

    render () {
        const { schoolProfile } = this.props;

        return (
            <div>
                {schoolProfile && <EditSchoolForm />}
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        schoolProfile : state.schoolProfile
    }
}

EditFormContainer = connect(mapStateToProps)(EditFormContainer)
export default EditFormContainer
