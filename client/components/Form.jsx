

import React from 'react';
import ReactDOM from 'react-dom';
import {RadioGroup, Radio} from 'react-radio-group';

export default class Form extends React.Component{
    constructor(props) {
      super(props)

      this.itemModel = { fruit: 'apple' }

      this.state = {
          selectedValue : 'apple',
          item: {...this.itemModel}
      }

     console.log(this.state.item)


    }


      handleSubmit (evt) {
        evt.preventDefault()

        this.setState({
          item: { ...this.itemModel }
        })

        console.log(this.state.item.fruit)
      }

  handleChange(evt) {
   const field = evt.target.name
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

  render() {
    return (
        <form onSubmit={this.handleSubmit.bind(this)}>
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
