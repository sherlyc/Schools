import React from 'react'
import * as api from '../api'

export default class AddSchoolForm extends React.Component {
  constructor (props){
    super(props)


    this.itemModel = {  name: '', schoolType: '', }
    this.state = {
      item : {...this.itemModel},
      radioVal : "State"
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
    this.setState({
      item: {
        ...this.state.item,
        [field]: evt.target.value
      }
    })


   }



  render () {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={this.state.item.name} onChange={this.handleChange.bind(this)} />

          <label htmlFor="name">School Type</label>
               <select name="schoolType" value={this.state.item.value} onChange={this.handleChange.bind(this)}>
               <option value="">Select</option>
               <option value="Full Primary (Year 1-8)">Full Primary (Year 1-8)</option>
               <option value="Secondary (Year 7-15)">Secondary (Year 7-15)</option>
               <option value="Composite (Year 1-15)">Composite (Year 1-15)</option>
               <option value="Special School">Special School</option>
             </select>

          <label htmlFor="name">Authority</label>
            <input type="radio" name="authority" value="State"
                        checked={this.state.item.value == 'State'}
                        onChange={this.handleChange.bind(this)} />
            State
            <input type="radio" name="authority" value="Private"
                        checked={this.state.item.value == 'Private'}
                        onChange={this.handleChange.bind(this)} />
            Private

        <input type="submit" value="Add" />
      </form>
    )
  }
}
