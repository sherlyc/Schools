import React from 'react'
import * as api from '../api'
import { addSchool } from '../actions'
import { Field, reduxForm } from 'redux-form'
import renderField from './RenderField'


const validate = values => {
  const errors = {}
  if (!values.name || values.name.trim() === '') {
    errors.name = 'Required'
  } else if (values.name.length > 50) {
    errors.username = 'Must be 50 characters or less'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.decile) {
    errors.decile = 'Required'
 } else if (isNaN(Number(values.decile))) {
    errors.decile = 'Must be a number'
  }
  return errors
}

const warn = values => {
  const warnings = {}
  if (values.age < 19) {
    warnings.age = 'Hmm, you seem a bit young...'
  }
  return warnings
}

const validateAndAddSchool = (values, dispatch) => {

  return dispatch(addSchool(values))
//     .then(result => {
//       // Note: Error's "data" is in result.payload.response.data (inside "response")
//       // success's "data" is in result.payload.data
//       //if (result.payload.response && result.payload.response.status !== 200) {
//         // dispatch(createPostFailure(result.payload.response.data));
//         //throw new SubmissionError(result.payload.response.data);
//      // }
//       //let other components know that everything is fine by updating the redux` state
//       //dispatch(addSchoolSuccess(result.payload.data)); //ps: this is same as dispatching RESET_USER_FIELDS
//     }
// )
}

class AddSchoolForm extends React.Component {
  constructor (props){
    super(props)

    this.itemModel = {  name: '',
         schoolType: '',
         authority: 'State',
         gender: 'Co-Educational',
         decile: '',
         address: '',
         suburb: '',
         email: '',
         url: '',
         latitude: '',
         longitude: '' }

    this.state = {
      item : {...this.itemModel}
    }
  }

  handleSubmit (evt) {
      console.log("don't")
    evt.preventDefault()


    this.setState({
      item: { ...this.itemModel }
    })

    api.addSchool(this.state.item, function(){
          this.props.history.push('/schools')}.bind(this))
  }

  handleChange (evt) {
    const field = evt.target.name

    this.setState({
      item: {
        ...this.state.item,
        [field]: evt.target.value
      }
    })
  }



  render () {
      const {handleSubmit, pristine, reset, submitting } = this.props

    return (
      <form onSubmit={handleSubmit(validateAndAddSchool)} className="form">

          <Field
            name="name"
            type="text"
            component={renderField}
            label="name"
          />


          <div>
            <label htmlFor="name">Name :</label>
            <input type="text" name="name" value={this.state.item.name} onChange={this.handleChange.bind(this)} />
          </div>
         <div>
             <label htmlFor="name">School Type :</label>
              <select name="schoolType" value={this.state.item.schoolType} onChange={this.handleChange.bind(this)}>
                    <option value="">Select</option>
                    <option value="Full Primary (Year 1-8)">Full Primary (Year 1-8)</option>
                    <option value="Secondary (Year 7-15)">Secondary (Year 7-15)</option>
                    <option value="Composite (Year 1-15)">Composite (Year 1-15)</option>
                    <option value="Special School">Special School</option>
             </select>
         </div>
         <div>
       <label htmlFor="authority">Authority : </label>
              <label>
                <input type='radio' value="State" name="authority"
                  checked={this.state.item.authority == "State"}
                  onChange={(e) => this.handleChange(e)}
                  />State
              </label>
              <label>
                <input type='radio' value="Private" name="authority"
                  checked={this.state.item.authority == "Private"}
                  onChange={(e) => this.handleChange(e)}
                  />Private
              </label>
      </div>
        <div>
          <label htmlFor="gender">Gender : </label>
            <label>
             <input type='radio' value="Girls School" name="gender"
                checked={this.state.item.gender == "Girls School"}
                onChange={(e) => this.handleChange(e)} />Girls School
            </label>
            <label>
            <input type='radio' value="Boys School" name="gender"
               checked={this.state.item.gender == "Boys School"}
               onChange={(e) => this.handleChange(e)} />Boys School
           </label>
           <label>
           <input type='radio' value="Co-Educational" name="gender"
              checked={this.state.item.gender == "Co-Educational"}
              onChange={(e) => this.handleChange(e)} />Co-Educational
          </label>
        </div>
        <div>
          <label htmlFor="decile">Decile : </label>
          <input type="text" name="decile" value={this.state.item.decile} onChange={this.handleChange.bind(this)} />
        </div>
        <div>
          <label htmlFor="address">Address : </label>
          <input type="text" name="address" value={this.state.item.address} onChange={this.handleChange.bind(this)} />
        </div>
        <div>
          <label htmlFor="suburb">Suburb :</label>
          <input type="text" name="suburb" value={this.state.item.suburb} onChange={this.handleChange.bind(this)} />
        </div>
        <div>
          <label htmlFor="email">Email : </label>
          <input type="email" name="email" value={this.state.item.email} onChange={this.handleChange.bind(this)} />
        </div>
        <div>
          <label htmlFor="website">Website : </label>
          <input type="text" name="url" value={this.state.item.url} onChange={this.handleChange.bind(this)} />
        </div>
        <div>
          <label htmlFor="latitude">Latitude : </label>
          <input type="text" name="latitude" value={this.state.item.latitude} onChange={this.handleChange.bind(this)} />
        </div>
        <div>
          <label htmlFor="longitude">Longitude : </label>
          <input type="text" name="longitude" value={this.state.item.longitude} onChange={this.handleChange.bind(this)} />
        </div>
        <div>
        <input type="submit" value="Add" />
        </div>
      </form>
    )
  }
}


export default reduxForm({
  form: 'AddSchoolForm', // a unique identifier for this form
  validate // <--- validation function given to redux-form
})(AddSchoolForm)
