import React from 'react'
import * as api from '../api'
import {RadioGroup, Radio} from 'react-radio-group';


export default class AddSchoolForm extends React.Component {
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
    evt.preventDefault()

    this.setState({
      item: { ...this.itemModel }
    })

    api.addSchool(this.state.item, function(){
          this.props.history.push('/schools')}.bind(this))
  }

  handleChange (evt) {
    const field = evt.target.name
    console.log(evt)

    this.setState({
      item: {
        ...this.state.item,
        [field]: evt.target.value
      }
    })
  }

  handleAuthority (value) {
        this.setState({item: {...this.state.item, authority: value}})
  }

  handleGender (value) {
        this.setState({item: {...this.state.item, gender: value}})
  }


  render () {
    console.log(this.state)
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="form">
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
          <RadioGroup
                 name="gender"
                 selectedValue={this.state.item.gender}
                 onChange={this.handleGender.bind(this)}>
                 <label>
                   <Radio value="Girls School" />Girls School
                 </label>
                 <label>
                   <Radio value="Boys School" />Boys School
                 </label>
                 <label>
                   <Radio value="Co-Educational" />Co-Educational
                 </label>
          </RadioGroup>
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
