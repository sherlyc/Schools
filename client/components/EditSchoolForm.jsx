import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { createHashHistory } from 'history'
import { getSchool, updateSchool, postUpdate, clearError } from '../actions'

const schoolType = [ 'Full Primary (Year 1-8)', 'Secondary (Year 9-15)', 'Composite (Year 1-15)', 'Special School' ]
const history = createHashHistory()

class EditSchoolForm extends React.Component {

    componentWillMount () {
        this.props.load(this.props.match.params.id)
    }

    componentWillUnmount() {
       this.props.dispatch(clearError())
    }

    render() {
        const { handleSubmit, pristine, reset, submitting, submitSucceeded } = this.props
        const saveSchool = (values, dispatch) => {
          //to do : add error handling here, gotta ask JV about this.
          return dispatch(updateSchool(this.props.match.params.id, values))
        }


        return (
                  <form onSubmit={handleSubmit(saveSchool)} className="form">
                    <div>{this.props.errorMessage}</div>
                      <div>
                         <label>School Name :</label>
                         <div>
                           <Field name="name" component="input" type="text" />
                         </div>
                       </div>

                       <div>
                           <label>School Type :</label>
                           <div>
                             <Field name="schoolType" component="select">
                                 <option value="">Select a school type...</option>
                                 {schoolType.map(schoolOption =>
                                     <option value={schoolOption} key={schoolOption}>{schoolOption}</option>)}
                             </Field>
                           </div>
                       </div>

                      <div>
                          <label>Authority :</label>
                          <div>
                              <label>
                                  <Field name="authority" component="input" type="radio" value="State" />
                                  {' '}
                                  State
                              </label>
                              <label>
                                  <Field name="authority" component="input" type="radio" value="Private" />
                                  {' '}
                                  Private
                              </label>
                          </div>
                      </div>
                      <div>
                          <label>Gender :</label>
                            <div>
                                <label>
                                    <Field name="gender" component="input" type="radio" value="Girls School" />
                                    {' '}
                                    Girls School
                                </label>
                                <label>
                                    <Field name="gender" component="input" type="radio" value="Boys School" />
                                    {' '}
                                    Boys School
                                </label>
                                <label>
                                    <Field name="gender" component="input" type="radio" value="Co-Educational" />
                                    {' '}
                                    Co-Educational
                                </label>
                            </div>
                      </div>
                      <div>
                          <label>Decile :</label>
                          <div>
                              <Field name="decile" component="input" type="text" />
                          </div>
                      </div>

                      <div>
                          <label>Address :</label>
                          <div>
                              <Field name="address" component="input" type="text" />
                          </div>
                      </div>
                      <div>
                          <label>Suburb :</label>
                          <div>
                              <Field name="suburb" component="input" type="text" />
                          </div>
                      </div>

                      <div>
                          <label>Email :</label>
                          <div>
                              <Field name="email" component="input" type="email" />
                          </div>
                      </div>
                      <div>
                          <label>URL :</label>
                          <div>
                              <Field name="url" component="input" type="text" />
                          </div>
                      </div>
                      <div>
                          <label>Latitude :</label>
                          <div>
                              <Field name="latitude" component="input" type="text" />
                          </div>
                      </div>
                      <div>
                          <label>Longitude :</label>
                          <div>
                              <Field name="longitude" component="input" type="text" />
                          </div>
                      </div>
                      <div>
                          <input type="submit" value="Update" />
                      </div>
                      <p className="submitSucceed"> { submitSucceeded ? "School has been updated" : "" }</p>

                  </form>
        )
    }

}

EditSchoolForm = reduxForm({
  form: 'editSchoolForm', // a unique identifier for this form
  enableReinitialize : true,
  onSubmitSuccess (result) { // reset the form onSubmitSuccess
    //setTimeout(() => history.push('/'), 1200 )
  }

})(EditSchoolForm)

// You have to connect() to any reducers that you wish to connect to yourself
EditSchoolForm = connect(
  state => {
    return {
      initialValues: state.schoolProfile,
      errorMessage: state.error // pull initial values from account reducer
    }
  },
  { load : getSchool }               // bind account loading action creator
)(EditSchoolForm)

export default EditSchoolForm
