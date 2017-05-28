import React from 'react'
import * as api from '../api'
import {RadioGroup, Radio} from 'react-radio-group';


export default class AddSchoolForm extends React.Component {
  constructor (props){
    super(props)


    this.itemModel = {  name: '', schoolType: '', fruit: '' }
    this.state = {
      selectedValue : 'apple',
      item : {...this.itemModel}

    }
  }

  handleSubmit (evt) {
    evt.preventDefault()

    this.setState({
      item: { ...this.itemModel }
    })

    console.log(this.state.item)
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

    handleRadio (value) {
        this.setState({selectedValue : value, item: {...this.state.item, fruit: value}})
        console.log(this.state.item)
    }



  render () {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={this.state.item.name} onChange={this.handleChange.bind(this)} />

          <label htmlFor="name">School Type</label>
               <select name="schoolType" value={this.state.item.schoolType} onChange={this.handleChange.bind(this)}>
               <option value="">Select</option>
               <option value="Full Primary (Year 1-8)">Full Primary (Year 1-8)</option>
               <option value="Secondary (Year 7-15)">Secondary (Year 7-15)</option>
               <option value="Composite (Year 1-15)">Composite (Year 1-15)</option>
               <option value="Special School">Special School</option>
             </select>

             <RadioGroup
                name="fruit"
                selectedValue={this.state.selectedValue}
                onChange={this.handleRadio.bind(this)}>
                <label>
                  <Radio value="apple" />Apple
                </label>
                <label>
                  <Radio value="orange" />Orange
                </label>
                <label>
                  <Radio value="watermelon" />Watermelon
                </label>
              </RadioGroup>

        <input type="submit" value="Add" />
      </form>
    )
  }
}
