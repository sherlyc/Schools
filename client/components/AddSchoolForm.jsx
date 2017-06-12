import React from 'react'
import { addSchool, clearError } from '../actions'
import { connect } from 'react-redux'
import { Field, reduxForm, reset } from 'redux-form'
import { renderField, validate } from './FormUtils'


const submitSchool = (values, dispatch) => {
  return dispatch(addSchool(values))
}

class AddSchoolForm extends React.Component {

  componentWillUnmount() {
     this.props.dispatch(clearError())
  }

   render (){
     const {handleSubmit, pristine, reset, submitting, submitSucceeded, errorMessage } = this.props

     return (

         <form onSubmit={handleSubmit(submitSchool)} className="form">
         <div>{errorMessage}</div>
           <div>
              <label>School Name :</label>
              <div>
                <Field name="name" component={renderField} type="text" placeholder="School Name"
                />
              </div>
            </div>

            <div>
                <label>School Type :</label>
                <div>
                  <Field name="schoolType" component="select">
                     <option />
                       <option value="Full Primary (Year 1-8)">Full Primary (Year 1-8)</option>
                       <option value="Secondary (Year 9-15)">Secondary (Year 7-15)</option>
                       <option value="Composite (Year 1-15)">Composite (Year 1-15)</option>
                       <option value="Special School">Special School</option>
                  </Field>
                    <label>
                        <Field name="gender" component="input" type="radio" value="Girls School"  />
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
                   <Field name="decile" component={renderField} type="text" placeholder="Decile"/>
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
                   <Field name="suburb" component={renderField} type="text" placeholder="suburb" />
               </div>
           </div>

           <div>
               <label>Email :</label>
               <div>
                   <Field name="email" component={renderField} type="email" placeholder="email" />
               </div>
           </div>
           <div>
               <label>URL :</label>
               <div>
                   <Field name="url" component={renderField} type="text" placeholder="http://" />
               </div>
           </div>
           <div>
               <label>Latitude :</label>
               <div>
                   <Field name="latitude" component={renderField} type="text" placeholder="latitude" />
               </div>
           </div>
           <div>
               <label>Longitude :</label>
               <div>
                   <Field name="longitude" component={renderField} type="text" placeholder="longitude"/>
               </div>
           </div>
           <div>
               <input type="submit" disabled={pristine || submitting} value="Add" />
           </div>
       </form>
     )
   }
}

AddSchoolForm = reduxForm({
  form: 'AddSchoolForm', // a unique identifier for this form
  validate, // <--- validation function given to redux-form
  onSubmitSuccess (result, dispatch) { // reset the form onSubmitSuccess
  //setTimeout(() => dispatch(reset('AddSchoolForm')), 1200 );
  }
})(AddSchoolForm)

AddSchoolForm = connect(
  state => {
    return {
       errorMessage: state.error // pull initial values from account reducer
    }
  })(AddSchoolForm)

export default AddSchoolForm
